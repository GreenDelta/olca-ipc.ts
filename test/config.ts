import * as o from "../mod.ts";

export {
  assert,
  assertAlmostEquals,
  assertEquals,
} from "https://deno.land/std@0.208.0/assert/mod.ts";

const useRest = false;
export const client = useRest ? o.RestClient.on(8080) : o.IpcClient.on(8080);
