import * as o from "./schema.ts";

export interface Client {
  get(
    refType: o.RefType,
    q: string | Record<string, string>,
  ): Promise<o.RootEntity | null>;

  getAll(refType: o.RefType): Promise<o.RootEntity[]>;

  getDescriptors(refType: o.RefType): Promise<o.Ref[]>;

  getDescriptor(
    refType: o.RefType,
    q: string | Record<string, string>,
  ): Promise<o.Ref | null>;

  getProviders(flow?: o.Ref): Promise<o.TechFlow[]>;

  getParameters(
    type: o.RefType,
    id: string,
  ): Promise<Array<o.Parameter | o.ParameterRedef>>;

  createProductSystem(
    process: o.Ref | o.Process,
    config?: o.LinkingConfig,
  ): Promise<o.Ref | null>;

  delete(model: o.Ref | o.RootEntity): Promise<o.Ref | null>;

  calculate(setup: o.CalculationSetup): Promise<Result>;

  simulate(setup: o.CalculationSetup): Promise<Result>;
}

export interface Result {
  getState(): Promise<o.ResultState>;

  simulateNext(): Promise<o.ResultState>;
}
