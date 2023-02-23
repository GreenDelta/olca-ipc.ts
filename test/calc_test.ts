import { assertAlmostEquals, assertEquals, client } from "./config.ts";

import * as o from "../mod.ts";

Deno.test("simple calculation", async (t) => {
  // create the model
  const units = o.createUnitGroup("Units", "kg");
  const mass = o.createFlowProperty("Mass", units);
  const e = o.createElementaryFlow("e", mass);
  const p = o.createProduct("p", mass);
  const process = o.createProcess("P", p);
  o.createOutput(process, e, 21);
  const i = o.createImpactCategory("i");
  o.createImpactFactor(i, e, 0.5);
  const method = o.createImpactMethod("M", [i]);
  const entities = [units, mass, e, p, process, i, method];
  for (const entity of entities) {
    await client.put(entity);
  }

  // run the calculation
  const setup = o.CalculationSetup.of({
    target: process.toRef(),
    impactMethod: method.toRef(),
    amount: 2, // kg
  });
  const result = await client.calculate(setup);

  t.step("demand", async () => {
    const demand = await result.getDemand();
    assertEquals("P", demand.techFlow?.provider?.name);
    assertEquals("p", demand.techFlow?.flow?.name);
    assertAlmostEquals(2, demand.amount!);
  });

  // cleanup
  result.dispose();
  for (const entity of entities.reverse()) {
    client.delete(entity);
  }
});
