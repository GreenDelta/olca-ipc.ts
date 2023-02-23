import * as o from "../mod.ts";

const useRest = true;
export const client = useRest ? o.RestClient.on(8080) : o.IpcClient.on(8080);
