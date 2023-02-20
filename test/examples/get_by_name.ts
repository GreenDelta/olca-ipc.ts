import * as o from "../../mod.ts";

async function main() {
  try {
    const client = o.IpcClient.on(8080);
    const flow = await client.get(o.RefType.Flow, { name: "carbon dioxide" });
    console.log(flow);
  } catch (e) {
    console.log(e.message);
  }
}
main();
