
import * as o from "../../mod.ts";

(async () => {
  const client = o.IpcClient.on(8080);
  const params = await client.getParameters(
    o.RefType.ProductSystem, "72f70be6-c334-48a4-a231-3eac86d76d8e");
  for (const param of params) {
    console.log(param.toJson());
  }
})();
