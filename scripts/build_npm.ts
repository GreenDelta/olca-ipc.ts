import { build, emptyDir } from "dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  typeCheck: false,
  test: false,
  shims: {
    // see JS docs for overview and more options
    // deno: true,
    deno: "dev",
  },
  package: {
    // package.json properties
    name: "olca-ipc",
    version: "2.7.0",
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
Deno.remove("npm/.npmignore");
