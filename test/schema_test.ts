import {
  assert,
  assertAlmostEquals,
  assertEquals,
} from "https://deno.land/std@0.177.0/testing/asserts.ts";
import * as o from "../src/schema.ts";

Deno.test(function testToFromJson() {
  const json = o.Flow.of({
    id: "co2",
    name: "carbon dioxide",
    flowProperties: [o.FlowPropertyFactor.of({
      flowProperty: o.Ref.of({
        id: "mass",
        name: "Mass",
      }),
      conversionFactor: 1.0,
      isRefFlowProperty: true,
    })],
  }).toJson();
  // console.log(json);

  const flow = o.Flow.fromJson(json)!;
  assertEquals(flow.id, "co2");
  assertEquals(flow.name, "carbon dioxide");
  const prop = flow.flowProperties![0];
  assertEquals(prop.flowProperty!.id, "mass");
  assertEquals(prop.flowProperty!.name, "Mass");
  assertAlmostEquals(prop.conversionFactor!, 1.0);
  assert(prop.isRefFlowProperty);

  // assertEquals(add(2, 3), 5);
});

Deno.test(function testStrEnum() {
  const d = "INPUT";
  const e = d as o.Direction;
  assertEquals(e, o.Direction.INPUT);
});
