import * as o from "../../mod.ts";

async function main() {
  const client = o.IpcClient.on(8080);

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

  const enviFlow = (await result.getEnviFlows())[0];
  const flow = enviFlow.flow!;
  console.log(`Upstream tree for ${flow.name} [${flow.refUnit}]`);
  await expandFlowTree(result, enviFlow, []);

  await result.dispose();
}

async function expandFlowTree(
  result: o.protocol.Result,
  enviFlow: o.EnviFlow,
  path: o.UpstreamNode[],
) {
  const level = path.length;
  const parent = level > 0 ? path[level - 1] : null;
  const nextLevel = await result.getUpstreamInterventionsOf(
    enviFlow,
    path.map((node) => node.techFlow!),
  );
  for (const node of nextLevel) {
    if (!node.techFlow || !node.result) {
      continue;
    }
    const share = parent ? Math.abs(node.result / parent?.result!) : 1.0;
    if (share < 0.01) {
      continue;
    }
    const techFlow = node.techFlow;
    const r = `${techFlow?.provider?.name} :: ${node.result}`;
    console.log(`${indent(level)} - ${r}`);
    if (level < 4) {
      const nextPath = path.slice();
      nextPath.push(node);
      await expandFlowTree(result, enviFlow, nextPath);
    }
  }
}

function indent(level: number): string {
  let s = "";
  for (let i = 0; i < 2 * (level + 1); i++) {
    s += " ";
  }
  return s;
}

main();
