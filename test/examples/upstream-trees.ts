// This example shows how upstream contribution trees can
// be created via the API. It automatically expands the
// trees to a maximum depth and minimum result share of
// the nodes. Note that in a real application you may
// want to expand these nodes interactively on demand.
// Also note, that an upstream tree with cycles has
// an infinite depth.

import * as o from "../../mod.ts";

// the minimum result share of nodes that should be drawn
const MIN_SHARE = 0.20;
// the maximum depth of the tree
const MAX_DEPTH = 5;

async function main() {
  const client = o.IpcClient.on(8080);

  // calculate a result
  const result = await client.calculate(o.CalculationSetup.of({
    target: o.Ref.of({
      id: "7d1cbce0-b5b3-47ba-95b5-014ab3c7f569",
    }),
    impactMethod: o.Ref.of({
      id: "207ffac9-aaa8-401d-ac90-874defd3751a",
    }),
    withCosts: true,
  }));
  await result.untilReady();

  // expand a tree for the first intervention flow
  const enviFlow = (await result.getEnviFlows())[0];
  const flow = enviFlow.flow!;
  console.log(`Upstream tree for ${flow.name} [${flow.refUnit}]`);
  await expandTree(
    (path) => result.getUpstreamInterventionsOf(enviFlow, path),
    [],
  );

  // expand a tree for the first LCIA category
  const impact = (await result.getImpactCategories())[0];
  console.log(`Upstream tree for ${impact.name} [${impact.refUnit}]`);
  await expandTree(
    (path) => result.getUpstreamImpactsOf(impact, path),
    [],
  );

  await result.dispose();
}

type Expansion = (path?: o.TechFlow[]) => Promise<o.UpstreamNode[]>;

async function expandTree(
  fn: Expansion,
  path: o.UpstreamNode[],
) {
  // fetch the next level
  const nextLevel = await fn(path.map((node) => node.techFlow!));

  // print the next level
  const level = path.length;
  const parent = level > 0 ? path[level - 1] : null;
  for (const node of nextLevel) {
    if (!node.techFlow || !node.result) {
      continue;
    }
    const share = parent ? Math.abs(node.result / parent?.result!) : 1.0;
    if (share < MIN_SHARE) {
      continue;
    }
    printNode(level, node);
    if (level < MAX_DEPTH) {
      const nextPath = path.slice();
      nextPath.push(node);
      await expandTree(fn, nextPath);
    }
  }
}

function printNode(level: number, node: o.UpstreamNode) {
  const indent = "  ".repeat(level);
  const provider = node.techFlow?.provider?.name;
  console.log(`${indent}- ${provider} :: ${node.result}`);
}

main();
