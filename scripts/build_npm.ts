import { build, emptyDir } from "https://deno.land/x/dnt@0.33.1/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  typeCheck: false,
  shims: {
    // see JS docs for overview and more options
    // deno: true,
    deno: "dev",
  },
  package: {
    // package.json properties
    name: "olca-ipc",
    version: "0.0.2",
    description: "An openLCA IPC client library",
    license: "MPL-2.0",
    repository: {
      type: "git",
      url: "git+https://github.com/GreenDelta/olca-ipc.ts.git",
    },
    bugs: {
      url: "https://github.com/GreenDelta/olca-ipc.ts/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
