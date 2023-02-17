import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import * as o from "./schema.ts";

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
    })]
  }).toJson();
  console.log(json);
  // assertEquals(add(2, 3), 5);
});
