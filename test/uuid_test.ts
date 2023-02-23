import { assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";

import { uuid } from "../mod.ts";

Deno.test(function testUuidGenerator() {
  const seq: string[] = [];
  for (let i = 0; i < 1000; i++) {
    const next = uuid();
    assert(seq.indexOf(next) < 0, `duplicate uuid: ${next}`);
    seq.push(next);
    assert(seq.indexOf(next) >= 0, `expected to find: ${next}`);
  }
});
