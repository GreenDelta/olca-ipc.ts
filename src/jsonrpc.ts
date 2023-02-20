import * as o from "./schema.ts";
import * as util from "./util.ts";

type Dict = Record<string, unknown>;

export class IpcClient {
  private _id = 0;

  constructor(private url: string) {
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
    return await this._call(
      "data/get",
      conf.toDict(refType),
      util.fromDictOf(refType),
    );
  }

  async getAll(refType: o.RefType): Promise<o.RootEntity[]> {
    const fn = util.fromDictOf(refType);
    return await this._callEach("data/get/all", { "@type": refType }, fn);
  }

  async getDescriptors(refType: o.RefType): Promise<o.Ref[]> {
    return await this._callEach(
      "data/get/descriptors",
      { "@type": refType },
      o.Ref.fromDict,
    );
  }

  async getDescriptor(
    refType: o.RefType,
    q: string | Record<string, string>,
  ): Promise<o.Ref | null> {
    const conf = util.EntityQuery.of(q);
    if (conf.isEmpty()) {
      throw Error("An ID or name bust be provided");
    }
    return await this._call(
      "data/get/descriptor",
      conf.toDict(refType),
      o.Ref.fromDict,
    );
  }

  async getProviders(flow?: o.Ref): Promise<o.TechFlow[]> {
    const params = flow ? flow.toDict() : {};
    return await this._callEach(
      "data/get/providers",
      params,
      o.TechFlow.fromDict,
    );
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
    return await this._callEach("data/get/parameters", params, fn);
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
    return await this._call("data/create/system", params, o.Ref.fromDict);
  }

  async delete(model: o.Ref | o.RootEntity): Promise<o.Ref | null> {
    if (!model) {
      return null;
    }
    const ref = model instanceof o.Ref ? model : model.toRef();
    return await this._call("data/delete", ref.toDict(), o.Ref.fromDict);
  }

  private async _callEach<T>(
    method: string,
    params: Dict,
    fn: (resp: any) => T | null,
  ): Promise<T[]> {
    const raw = (await this._call(method, params, (x) => x)) as Array<unknown>;
    if (!raw) {
      return [];
    }
    const res: T[] = [];
    for (const e of raw) {
      const t = fn(e);
      if (t) {
        res.push(t);
      }
    }
    return res;
  }

  private async _call<T>(
    method: string,
    params: Dict,
    fn: (resp: any) => T,
  ): Promise<T | null> {
    const id = ++this._id;
    const resp = await (await fetch(this.url, {
      method: "POST",
      body: JSON.stringify({ jsonrpc: "2.0", id, method, params }),
    })).json();

    const err = resp["error"];
    if (err) {
      throw Error(err);
    }

    const result = resp["result"];
    if (!result) {
      return null;
    }

    return fn(result);
  }
}
