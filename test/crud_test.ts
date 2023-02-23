import * as o from "../mod.ts";
import { assert, assertEquals, client } from "./config.ts";

Deno.test(async function testCrud() {
  // create a process and related data
  const kg = o.createUnit("kg");
  const units = o.createUnitGroup("Units of mass", kg);
  const mass = o.createFlowProperty("Mass", units);
  const steel = o.createProduct("Steel", mass);
  const co2 = o.createElementaryFlow("Carbon dioxide", mass);
  const process = o.createProcess("Steel production", steel);
  o.createOutput(process, co2, 2, kg);
  const models = [units, mass, steel, co2, process];
  for (const m of models) {
    await client.put(m);
  }

  // fetch and check the process
  const p = await client.get(o.RefType.Process, process.id!) as o.Process;
  assertEquals(process.name, p.name);
  assertEquals(2, p.exchanges?.length);
  const steelEx = p.exchanges?.filter((e) =>
    e.flow?.flowType === o.FlowType.PRODUCT_FLOW
  )[0];
  assertEquals("Steel", steelEx?.flow?.name);
  assertEquals(1.0, steelEx?.amount);
  assert(steelEx?.isQuantitativeReference);
  const co2Ex = p.exchanges?.filter((e) =>
    e.flow?.flowType === o.FlowType.ELEMENTARY_FLOW
  )[0];
  assertEquals(co2.name, co2Ex?.flow?.name);
  assertEquals(2.0, co2Ex?.amount);

  // clean up
  for (const m of models) {
    await client.delete(m);
  }
});
