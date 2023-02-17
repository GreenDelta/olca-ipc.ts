import * as o from "./schema.ts";

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

  async getDescriptors(refType: o.RefType): Promise<o.Ref[]> {
    return await this._callEach(
      "data/get/descriptors",
      { "@type": refType },
      x => o.Ref.fromDict(x as Dict)!);
  }

  private async _callEach<T>(method: string, params: Dict,
    fn: (resp: unknown) => T): Promise<T[]> {
    const raw = (await this._call(method, params, x => x)) as Array<unknown>;
    if (!raw) {
      return [];
    }
    return raw.map(fn);
  }

  private async _call<T>(method: string, params: Dict,
    fn: (resp: unknown) => T): Promise<T | null> {

    const id = ++this._id;
    const resp = await (await fetch(this.url, {
      method: "POST",
      body: JSON.stringify({ jsonrpc: "2.0", id, method, params })
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
