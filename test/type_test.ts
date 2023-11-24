import * as o from "../mod.ts";
import { assertEquals } from "./config.ts";

Deno.test("Ref @type: serialize", () => {
  const ref = o.Ref.of({
    refType: o.RefType.Flow,
    id: "abc",
  });
  const dict = ref.toDict();
  assertEquals("Flow", dict["@type"]);
  assertEquals("abc", dict["@id"]);
});

Deno.test("Ref @type: deserialize", () => {
  const ref = o.Ref.fromDict({
    "@type": "Flow",
    "@id": "abc",
  });
  assertEquals(o.RefType.Flow, ref?.refType);
  assertEquals("abc", ref?.id);
});
