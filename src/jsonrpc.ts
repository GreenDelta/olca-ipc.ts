import * as o from "./schema.ts";

export class IpcClient {

  constructor(private url: string) {
  }

  static on(portOrEndpoint: string | number): IpcClient {
    const url = typeof portOrEndpoint === "number"
      ? `http://localhost:${portOrEndpoint}`
      : portOrEndpoint;
    return new IpcClient(url);
  }

  async getDescriptors(refType: o.RefType): Promise<o.Ref[]> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "data/get/descriptors",
        params: {
          "@type": refType
        }
      })
    });
    const vals = await resp.json();
    return vals.map(o.Ref.fromDict);
  }


}
