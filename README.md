# olca-ipc.ts

This is a TypeScript client for the openLCA IPC API. It supports the JSON-RPC and REST protocol of that API. See also the [openLCA IPC documentation](https://greendelta.github.io/openLCA-ApiDoc) and the [examples](./test/examples/) of this repository for more details. There is also a small example that shows the usage of this package in a web-ui available [here](https://github.com/GreenDelta/olca-ipc-web-example).

`olca-ipc.ts` is available as [npm package](https://www.npmjs.com/package/olca-ipc). Alternatively, you can directly import the latest version in your modules when you use [Deno](https://deno.com/):

```ts
import * as o from "https://raw.githubusercontent.com/GreenDelta/olca-ipc.ts/main/mod.ts";

const client = o.IpcClient.on(8080);
// ...
```

## Building from source

The `schema.ts` module is generated from the [openLCA schema](https://github.com/GreenDelta/olca-schema) definitions using the [osch](https://github.com/GreenDelta/olca-schema/tree/master/osch) tool:

```bash
cd olca-schema/osch
# go build  # to compile the osch tool
./osch ts -o path/to/olca-ipc.ts/src/schema.ts
cd path/to/olca-ipc.ts
deno fmt  # format the generated code
```

[Deno](https://deno.land/) is used as development tool. The npm package can be created via [dnt](https://github.com/denoland/dnt/) with the `build_npm.ts` script:

```bash
deno run --allow-all scripts/build_npm.ts

# publish on npm; make sure to update the version in build_npm.ts
# also, you need to be signed into npmjs.org and verify the update
cd npm
npm publish
```
