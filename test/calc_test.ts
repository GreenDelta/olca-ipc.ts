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
  await result.untilReady();
  const techFlow =
    (await result.getTechFlows()).filter((t) =>
      t.provider?.id === process.id
    )[0];
  const enviFlow =
    (await result.getEnviFlows()).filter((ef) => ef.flow?.id === e.id)[0];

  await t.step("demand", async () => {
    const demand = await result.getDemand();
    assertEquals("P", demand.techFlow?.provider?.name);
    assertEquals("p", demand.techFlow?.flow?.name);
    assertAlmostEquals(2, demand.amount!);
  });

  await t.step("inventory values", async () => {
    const values = [
      await result.getTotalFlowValueOf(enviFlow),
      await result.getDirectInterventionOf(enviFlow, techFlow),
      await result.getTotalInterventionOf(enviFlow, techFlow),
    ];
    for (const val of values) {
      assertEquals("e", val.enviFlow?.flow?.name);
      assertAlmostEquals(42, val.amount!);
    }
  });

  await t.step("impact values", async () => {
    const iRef = i.toRef();
    const values = [
      await result.getTotalImpactValueOf(iRef),
      await result.getDirectImpactOf(iRef, techFlow),
      await result.getTotalImpactOf(iRef, techFlow),
    ];
    for (const val of values) {
      assertEquals("i", val.impactCategory?.name);
      assertAlmostEquals(21, val.amount!);
    }
  });

  // cleanup
  await result.dispose();
  for (const entity of entities.reverse()) {
    await client.delete(entity);
  }
});
