import * as o from "../../mod.ts";

async function main() {
  const client = o.IpcClient.on(8080);

  const setup = o.CalculationSetup.of({
    target: o.Ref.of({
      refType: o.RefType.ProductSystem,
      id: "96391323-9b01-4104-b4ab-af9552526fcf",
    }),
    impactMethod: o.Ref.of({
      id: "7b459c54-21d3-4372-b3f6-9169f7a71885",
    }),
  });

  const result = await client.calculate(setup);
  const state = await result.untilReady();
  if (state.error) {
    throw new Error(`calculation failed: ${state.error}`);
  }

  const graph = await result.getSankeyGraph(o.SankeyRequest.of({
    impactCategory: o.Ref.of({
      id: "695d5012-9265-4537-a298-07f793e94ec3",
    }),
    maxNodes: 10,
  }));

  result.dispose();

  console.log(graph);
}

main();
