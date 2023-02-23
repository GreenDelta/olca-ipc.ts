import { assert, assertAlmostEquals, assertEquals } from "./config.ts";
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

Deno.test("toRef", () => {
  const p = o.Process.of({ name: "P", id: "pp" });
  const ref = p.toRef();
  assertEquals("P", ref.name);
  assertEquals("pp", ref.id);
  assertEquals("Process", ref.refType);
  const dict = ref.toDict();
  assertEquals("Process", dict["@type"]);
  assertEquals("pp", dict["@id"]);
  assertEquals("P", dict["name"]);
});
