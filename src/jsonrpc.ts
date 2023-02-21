import * as o from "./schema.ts";
import * as protocol from "./protocol.ts";
import * as util from "./util.ts";

type Dict = Record<string, unknown>;

interface Error {
  code: number;
  message: string;
  data?: any;
}

type None = null | undefined;

export class IpcClient implements protocol.Client {
  private _id = 0;

  constructor(private readonly url: string) {
  }

  static on(portOrEndpoint: string | number): IpcClient {
    const url = typeof portOrEndpoint === "number"
      ? `http://localhost:${portOrEndpoint}`
      : portOrEndpoint;
    return new IpcClient(url);
  }

  async get(
    refType: o.RefType,
    q: string | Record<string, string>,
  ): Promise<o.RootEntity | null> {
    const conf = util.EntityQuery.of(q);
    if (conf.isEmpty()) {
      throw Error("An ID or name bust be provided");
    }
    const resp = await this._call(
      "data/get",
      conf.toDict(refType),
      util.fromDictOf(refType),
    );
    return resp.orElse(null);
  }

  async getAll(refType: o.RefType): Promise<o.RootEntity[]> {
    const fn = util.fromDictOf(refType);
    const resp = await this._callEach("data/get/all", { "@type": refType }, fn);
    return resp.orElseThrow();
  }

  async getDescriptors(refType: o.RefType): Promise<o.Ref[]> {
    const resp = await this._callEach(
      "data/get/descriptors",
      { "@type": refType },
      o.Ref.fromDict,
    );
    return resp.orElseThrow();
  }

  async getDescriptor(
    refType: o.RefType,
    q: string | Record<string, string>,
  ): Promise<o.Ref | null> {
    const conf = util.EntityQuery.of(q);
    if (conf.isEmpty()) {
      throw Error("An ID or name bust be provided");
    }
    const resp = await this._call(
      "data/get/descriptor",
      conf.toDict(refType),
      o.Ref.fromDict,
    );
    return resp.orElse(null);
  }

  async getProviders(flow?: o.Ref): Promise<o.TechFlow[]> {
    const params = flow ? flow.toDict() : {};
    const resp = await this._callEach(
      "data/get/providers",
      params,
      o.TechFlow.fromDict,
    );
    return resp.orElseThrow();
  }

  async getParameters(
    type: o.RefType,
    id: string,
  ): Promise<Array<o.Parameter | o.ParameterRedef>> {
    const params = {
      "@type": type,
      "@id": id,
    };
    type Param = o.Parameter | o.ParameterRedef | null;
    const fn: (d: Dict) => Param =
      type === o.RefType.Process || o.RefType.ImpactCategory
        ? o.Parameter.fromDict
        : o.ParameterRedef.fromDict;
    const resp = await this._callEach("data/get/parameters", params, fn);
    return resp.orElse([]);
  }

  async put(model: o.RootEntity): Promise<o.Ref> {
    const resp = await this._call("data/put", model.toDict(), o.Ref.fromDict);
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
    const resp = await this._call("data/create/system", params, o.Ref.fromDict);
    return resp.orElseThrow();
  }

  async delete(model: o.Ref | o.RootEntity): Promise<o.Ref | null> {
    if (!model) {
      return null;
    }
    const ref = model instanceof o.Ref ? model : model.toRef();
    const resp = await this._call("data/delete", ref.toDict(), o.Ref.fromDict);
    return resp.orElse(null);
  }

  async calculate(setup: o.CalculationSetup): Promise<IpcResult> {
    const resp = await this._call(
      "result/calculate",
      setup.toDict(),
      o.ResultState.fromDict,
    );
    const state = resp.orElseThrow();
    return new IpcResult(this, state);
  }

  async simulate(setup: o.CalculationSetup): Promise<IpcResult> {
    const resp = await this._call(
      "result/simulate",
      setup.toDict(),
      o.ResultState.fromDict,
    );
    const state = resp.orElseThrow();
    return new IpcResult(this, state);
  }

  async _callEach<T>(
    method: string,
    params: Dict,
    fn: (resp: any) => T | null,
  ): Promise<protocol.Response<T[]>> {
    const resp = await this._call(method, params, (x) => x);
    if (resp.isError() || resp.isEmpty()) {
      return resp;
    }
    const raw = resp.value;
    if (!Array.isArray(raw)) {
      return protocol.Response.error("returned value is not an array");
    }
    const res: T[] = [];
    for (const e of raw) {
      const t = fn(e);
      if (t) {
        res.push(t);
      }
    }
    return protocol.Response.of(res);
  }

  async _call<T>(
    method: string,
    params: Dict,
    fn: (resp: any) => T | null,
  ): Promise<protocol.Response<T>> {
    const id = ++this._id;
    const resp = await (await fetch(this.url, {
      method: "POST",
      body: JSON.stringify({ jsonrpc: "2.0", id, method, params }),
    })).json();

    const err: Error | None = resp["error"];
    if (err) {
      return protocol.Response.error(`${err.code}: ${err.message}`);
    }
    const result = resp["result"];
    if (!result) {
      return protocol.Response.empty();
    }
    const val = fn(result);
    if (val == null || val === undefined) {
      return protocol.Response.empty();
    }
    return protocol.Response.of(val);
  }
}

class IpcResult implements protocol.Result {
  private readonly id: string;
  private error?: o.ResultState;

  constructor(private readonly client: IpcClient, state: o.ResultState) {
    this.id = state.id || "";
    if (state.error) {
      this.error = state;
    }
  }

  async getState(): Promise<o.ResultState> {
    return await this.nextState("result/state");
  }

  async simulateNext(): Promise<o.ResultState> {
    return await this.nextState("result/simulate/next");
  }

  private async nextState(method: string): Promise<o.ResultState> {
    if (this.error) {
      return this.error;
    }
    const resp = await this.client._call(
      method,
      { "@id": this.id },
      o.ResultState.fromDict,
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
}
