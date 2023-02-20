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
    if (!q) {
      throw Error("An ID or name bust be provided");
    }
    const id = typeof q === "string" ? q : q["id"];
    const name = typeof q === "object" ? q["name"] : undefined;
    if (!id && !name) {
      throw Error("An ID or name bust be provided");
    }
    const params: Record<string, string> = {
      "@type": refType,
    };
    if (id) {
      params["@id"] = id;
    }
    if (name) {
      params["name"] = name;
    }
    return await this._call("data/get", params, util.fromDictOf(refType));
  }

  async getAll(refType: o.RefType): Promise<o.RootEntity[]> {
    const fn = util.fromDictOf(refType);
    return await this._callEach("data/get/all", { "@type": refType }, fn);
  }

  async getDescriptors(refType: o.RefType): Promise<o.Ref[]> {
    return await this._callEach(
      "data/get/descriptors",
      { "@type": refType },
      (x) => o.Ref.fromDict(x as Dict)!,
    );
  }

  async getDescriptor(refType: o.RefType, q: string | Record<string, string>) {
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
