import * as o from "./schema.ts";
import * as protocol from "./protocol.ts";
import * as util from "./util.ts";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export class RestClient implements protocol.Client {
  constructor(private readonly base: string) {
  }

  static on(portOrEndpoint: string | number): RestClient {
    let base: string;
    if (typeof portOrEndpoint === "number") {
      base = `http://localhost:${portOrEndpoint}`;
    } else if (typeof portOrEndpoint === "string") {
      base = !portOrEndpoint.endsWith("/")
        ? portOrEndpoint + "/"
        : portOrEndpoint;
    } else {
      throw Error("needs a port number or URL but got: " + portOrEndpoint);
    }
    return new RestClient(base);
  }

  async get(
    refType: o.RefType,
    q: string | Record<string, string>,
  ): Promise<o.RootEntity | null> {
    const conf = util.EntityQuery.of(q);
    if (conf.isEmpty()) {
      throw Error("An ID or name bust be provided");
    }
    const suffix = `data/${pathOf(refType)}`;
    const path = conf.hasName()
      ? `${suffix}/name/${conf.uriName()}`
      : `${suffix}/${conf.id}`;
    const resp = await this._call(path, util.fromDictOf(refType));
    return resp.orElse(null);
  }

  async getAll(refType: o.RefType): Promise<o.RootEntity[]> {
    const resp = await this._callEach(
      `data/${pathOf(refType)}/all`,
      util.fromDictOf(refType),
    );
    return resp.orElse([]);
  }

  async getDescriptors(refType: o.RefType): Promise<o.Ref[]> {
    const resp = await this._callEach(
      `data/${pathOf(refType)}`,
      o.Ref.fromDict,
    );
    return resp.orElse([]);
  }

  async getDescriptor(
    refType: o.RefType,
    q: string | Record<string, string>,
  ): Promise<o.Ref | null> {
    const conf = util.EntityQuery.of(q);
    if (conf.isEmpty()) {
      throw Error("An ID or name bust be provided");
    }
    const suffix = `data/${pathOf(refType)}`;
    const path = conf.hasId()
      ? `${suffix}/${conf.id}/info`
      : `${suffix}/name/${conf.uriName()}/info`;
    const resp = await this._call(path, o.Ref.fromDict);
    return resp.orElse(null);
  }

  async getProviders(flow?: o.Ref): Promise<o.TechFlow[]> {
    const path = flow?.id ? `data/providers/${flow.id}` : `data/providers`;
    const resp = await this._callEach(path, o.TechFlow.fromDict);
    return resp.orElse([]);
  }

  async getParameters(
    type: o.RefType,
    id: string,
  ): Promise<Array<o.Parameter | o.ParameterRedef>> {
    const path = `data/${pathOf(type)}/${id}/parameters`;
    type Param = o.Parameter | o.ParameterRedef | null;
    const fn: (d: Record<string, any>) => Param =
      type === o.RefType.Process || o.RefType.ImpactCategory
        ? o.Parameter.fromDict
        : o.ParameterRedef.fromDict;
    const resp = await this._callEach(path, fn);
    return resp.orElse([]);
  }

  async put(model: o.RootEntity): Promise<o.Ref> {
    const dict = model.toDict();
    const type = dict["@type"] as o.RefType;
    const resp = await this._call(
      `data/${pathOf(type)}`,
      o.Ref.fromDict,
      "PUT",
      dict,
    );
    return resp.orElseThrow();
  }

  async createProductSystem(
    process: o.Ref | o.Process,
    config?: o.LinkingConfig,
  ): Promise<o.Ref | null> {
    const ref = process instanceof o.Process ? process.toRef() : process;
    const conf = config ? config : o.LinkingConfig.of({
      preferUnitProcesses: false,
      providerLinking: o.ProviderLinking.PREFER_DEFAULTS,
    });
    const params = {
      "process": ref.toDict(),
      "config": conf.toDict(),
    };
    const resp = await this._call(
      "data/create-system",
      o.Ref.fromDict,
      "POST",
      params,
    );
    return resp.orElseThrow();
  }

  async delete(model: o.Ref | o.RootEntity): Promise<o.Ref | null> {
    if (!model) {
      return null;
    }
    const ref = model instanceof o.Ref ? model : model.toRef();
    const path = `data/${pathOf(ref.refType!)}/${ref.id}`;
    const resp = await this._call(path, o.Ref.fromDict, "DELETE");
    return resp.orElse(null);
  }

  async calculate(setup: o.CalculationSetup): Promise<RestResult> {
    const resp = await this._call(
      "result/calculate",
      o.ResultState.fromDict,
      "POST",
      setup.toDict(),
    );
    const state = resp.orElseThrow();
    return new RestResult(this, state);
  }

  async simulate(setup: o.CalculationSetup): Promise<RestResult> {
    const resp = await this._call(
      "result/simulate",
      o.ResultState.fromDict,
      "POST",
      setup.toDict(),
    );
    const state = resp.orElseThrow();
    return new RestResult(this, state);
  }

  async _callEach<T>(
    path: string,
    fn: (resp: any) => T | null,
    method: HttpMethod = "GET",
    body?: Record<string, any>,
  ): Promise<protocol.Response<T[]>> {
    const resp = await this._call(path, (x) => x, method, body);
    if (resp.isError() || resp.isEmpty()) {
      return resp;
    }
    const array = resp.value;
    if (!Array.isArray(array)) {
      return protocol.Response.empty();
    }
    const res: T[] = [];
    for (const i of array) {
      const next = fn(i);
      if (next) {
        res.push(next);
      }
    }
    return protocol.Response.of(res);
  }

  async _call<T>(
    path: string,
    fn: (resp: any) => T | null,
    method: HttpMethod = "GET",
    body?: Record<string, any>,
  ): Promise<protocol.Response<T>> {
    const url = `${this.base}${path}`;

    const config: Record<string, any> = { method };
    if (body) {
      config.body = body;
    }
    const resp = await fetch(url, body);
    if (!ok(resp.status)) {
      const message = await resp.text();
      return protocol.Response.error(message);
    }

    const json = await resp.json();
    if (!json) {
      return protocol.Response.empty();
    }
    const val = fn(json);
    return val ? protocol.Response.of(val) : protocol.Response.empty();
  }
}

export class RestResult implements protocol.Result {
  private readonly id: string;
  private error?: o.ResultState;

  constructor(private readonly client: RestClient, state: o.ResultState) {
    this.id = state.id || "";
    if (state.error) {
      this.error = state;
    }
  }

  async getState(): Promise<o.ResultState> {
    return await this.nextState("state");
  }

  async simulateNext(): Promise<o.ResultState> {
    return await this.nextState("simulate/next", "POST");
  }

  async dispose(): Promise<void> {
    await this.client._call(this.path("dispose"), (x) => x, "POST");
  }

  private async nextState(
    path: string,
    method: HttpMethod = "GET",
  ): Promise<o.ResultState> {
    if (this.error) {
      return this.error;
    }
    const resp = await this.client._call(
      this.path(path),
      o.ResultState.fromDict,
      method,
    );
    if (resp.isError()) {
      this.error = o.ResultState.of({
        id: this.id,
        error: resp.error,
      });
      return this.error;
    }
    if (resp.isEmpty()) {
      this.error = o.ResultState.of({
        id: this.id,
        error: "failed to get result state",
      });
      return this.error;
    }
    const next = resp.value!;
    if (next.error) {
      this.error = next;
    } else if (this.error) {
      delete this.error;
    }
    return next;
  }

  private path(segments: string | Array<string>) {
    let path = `result/${this.id}`;
    if (typeof segments === "string") {
      path += "/" + segments;
    } else if (Array.isArray(segments)) {
      for (const seg of segments) {
        path += "/" + seg;
      }
    }
    return path;
  }
}

function ok(status: number): boolean {
  return status >= 200 && status < 300;
}

function pathOf(type: o.RefType): string {
  switch (type) {
    case o.RefType.Actor:
      return "actors";
    case o.RefType.Currency:
      return "currencies";
    case o.RefType.DQSystem:
      return "dq-systems";
    case o.RefType.Epd:
      return "epds";
    case o.RefType.Flow:
      return "flows";
    case o.RefType.FlowProperty:
      return "flow-properties";
    case o.RefType.ImpactCategory:
      return "impact-categories";
    case o.RefType.ImpactMethod:
      return "impact-methods";
    case o.RefType.Location:
      return "locations";
    case o.RefType.Parameter:
      return "parameters";
    case o.RefType.Process:
      return "processes";
    case o.RefType.ProductSystem:
      return "product-systems";
    case o.RefType.Project:
      return "projects";
    case o.RefType.Result:
      return "results";
    case o.RefType.SocialIndicator:
      return "social-indicators";
    case o.RefType.Source:
      return "sources";
    case o.RefType.UnitGroup:
      return "unit-groups";
  }
  throw Error(`unknown entity type: ${type}`);
}
