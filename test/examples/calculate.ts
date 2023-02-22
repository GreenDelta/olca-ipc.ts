import * as o from "../../mod.ts";

async function main() {
  // we can use a client for the REST or IPC (JSON-RPC) protocol
  // both clients implement the same interface
  const protocol: "REST" | "IPC" = "IPC";
  const client = protocol === "IPC"
    ? o.IpcClient.on(8080)
    : o.RestClient.on(8080);

  // select a product system
  const systems = await client.getDescriptors(o.RefType.ProductSystem);
  if (systems.length === 0) {
    console.log("error: no product systems found");
    return;
  }
  const system = systems[0];
  console.log(`calculate system: ${system.name}`);

  // select an impact assessment method, if available
  const methods = await client.getDescriptors(o.RefType.ImpactMethod);
  const method = methods.length >= 0 ? methods[0] : null;
  if (!method) {
    console.log("  no LCIA method available");
  } else {
    console.log(`  using LCIA method: ${method.name}`);
  }

  // calculate the system
  console.log("  ... calculating ...");
  const setup = o.CalculationSetup.of({
    target: system,
    impactMethod: method,
  });
  const result = await client.calculate(setup);
  const state = await result.untilReady();
  if (state.error) {
    throw new Error(`calculation failed: ${state.error}`);
  }
  console.log("  done");

  // query the result
  const impacts = await result.getTotalImpacts();
  console.log("LCIA Results:");
  for (const impact of impacts) {
    const name = impact.impactCategory?.name;
    const unit = impact.impactCategory?.refUnit;
    console.log(`  ${name}: ${impact.amount?.toExponential(2)} ${unit}`);
  }

  // finally, dispose the result
  result.dispose();
}

main();
