# olca-ipc.ts

A TypeScript client for the openLCA IPC API. It supports the JSON-RPC and REST
protocol of this API. See also the [openLCA IPC documentation](https://greendelta.github.io/openLCA-ApiDoc/ipc/)
and the [examples](./test/examples/) of this repository for more details. There
is also a small example that shows the usage of that API in a web-ui available
[here](https://github.com/GreenDelta/olca-ipc-web-example).

## Building from source

The `schema.ts` module is generated from the [openLCA schema](https://github.com/GreenDelta/olca-schema) definition using the
[osch](https://github.com/GreenDelta/olca-schema/tree/master/osch) tool:

```bash
cd olca-schema/osch
# go build  # to compile the osch tool
./osch ts -o path/to/olca-ipc.ts/src/schema.ts
cd path/to/olca-ipc.ts
deno fmt    # format the generated code
```

[Deno](https://deno.land/) is used as development tool. The npm package can be
created via [dnt](https://github.com/denoland/dnt/) with the `build_npm.ts`
script:

```bash
deno run --allow-all scripts/build_npm.ts
cd npm
npm publish
```
