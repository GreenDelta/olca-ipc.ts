# olca-ipc.ts


## Building from source

The `schema.ts` module is generated from the [openLCA
schema](https://github.com/GreenDelta/olca-schema) definition using the
[osch](https://github.com/GreenDelta/olca-schema/tree/master/osch) tool:

```bash
osch ts -o path/to/olca-ipc.ts/schema.ts
```

[Deno](https://deno.land/) is used as development tool. The npm package can be
created via [dnt](https://github.com/denoland/dnt/) with the `build_npm.ts`
script:

```bash
deno run --allow-all scripts/build_npm.ts
cd npm
npm publish
```
