import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { add } from "./lib.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
