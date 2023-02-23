import * as o from "./schema.ts";

export class Response<T> {
  value?: T | null;
  error?: string | null;

  static of<T>(value: T): Response<T> {
    const r = new Response<T>();
    r.value = value;
    return r;
  }

  static error<T>(message: string): Response<T> {
    const r = new Response<T>();
    r.error = message;
    return r;
  }

  static empty<T>(): Response<T> {
    return new Response<T>();
  }

  isError(): boolean {
    return this.error ? true : false;
  }

  isEmpty(): boolean {
    return !this.error && (this.value === null || this.value === undefined);
  }

  orElse<E>(altVal: E): T | E {
    return this.isError() || this.isEmpty() ? altVal : this.value!;
  }

  orElseThrow(): T {
    if (this.error) {
      throw new Error(this.error);
    }
    if (this.value === null || this.value === undefined) {
      throw new Error("response contains no value");
    }
    return this.value!;
  }
}

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

  put(model: o.RootEntity): Promise<o.Ref>;

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

  dispose(): void;

  untilReady(pollTime?: number): Promise<o.ResultState>;

  //#region Result elements

  getDemand(): Promise<o.TechFlowValue>;

  getTechFlows(): Promise<o.TechFlow[]>;

  getEnviFlows(): Promise<o.EnviFlow[]>;

  getImpactCategories(): Promise<o.Ref[]>;

  //#endregion

  //#region Technosphere flows

  getScalingFactors(): Promise<o.TechFlowValue[]>;

  getTotalRequirements(): Promise<o.TechFlowValue[]>;

  getTotalRequirementsOf(techFlow: o.TechFlow): Promise<o.TechFlowValue>;

  getScaledTechFlowsOf(techFlow: o.TechFlow): Promise<o.TechFlowValue[]>;

  getUnscaledTechFlowsOf(techFlow: o.TechFlow): Promise<o.TechFlowValue[]>;

  //#endregion

  //#region Inventory results

  getTotalFlows(): Promise<o.EnviFlowValue[]>;

  getTotalFlowValueOf(enviFlow: o.EnviFlow): Promise<o.EnviFlowValue>;

  getFlowContributionsOf(enviFlow: o.EnviFlow): Promise<o.TechFlowValue[]>;

  getDirectInterventionsOf(techFlow: o.TechFlow): Promise<o.EnviFlowValue[]>;

  getDirectInterventionOf(
    enviFlow: o.EnviFlow,
    techFlow: o.TechFlow,
  ): Promise<o.EnviFlowValue>;

  getFlowIntensitiesOf(techFlow: o.TechFlow): Promise<o.EnviFlowValue[]>;

  getFlowIntensityOf(
    enviFlow: o.EnviFlow,
    techFlow: o.TechFlow,
  ): Promise<o.EnviFlowValue>;

  getTotalInterventionsOf(techFlow: o.TechFlow): Promise<o.EnviFlowValue[]>;

  getTotalInterventionOf(
    enviFlow: o.EnviFlow,
    techFlow: o.TechFlow,
  ): Promise<o.EnviFlowValue>;

  //#endregion

  //#region Impact assessment results

  getTotalImpacts(): Promise<o.ImpactValue[]>;

  getNormalizedImpacts(): Promise<o.ImpactValue[]>;

  getWeightedImpacts(): Promise<o.ImpactValue[]>;

  getTotalImpactValueOf(impactCategory: o.Ref): Promise<o.ImpactValue>;

  getImpactContributionsOf(impactCategory: o.Ref): Promise<o.TechFlowValue[]>;

  getDirectImpactsOf(techFlow: o.TechFlow): Promise<o.ImpactValue[]>;

  getDirectImpactOf(
    impactCategory: o.Ref,
    techFlow: o.TechFlow,
  ): Promise<o.ImpactValue>;

  getImpactIntensitiesOf(techFlow: o.TechFlow): Promise<o.ImpactValue[]>;

  getImpactIntensityOf(
    impactCategory: o.Ref,
    techFlow: o.TechFlow,
  ): Promise<o.ImpactValue>;

  getTotalImpactsOf(techFlow: o.TechFlow): Promise<o.ImpactValue[]>;

  getTotalImpactOf(
    impactCategory: o.Ref,
    techFlow: o.TechFlow,
  ): Promise<o.ImpactValue>;

  getImpactFactorsOf(impactCategory: o.Ref): Promise<o.EnviFlowValue[]>;

  getImpactFactorOf(
    impactCategory: o.Ref,
    enviFlow: o.EnviFlow,
  ): Promise<o.ImpactValue>;

  getFlowImpactsOf(impactCategory: o.Ref): Promise<o.EnviFlowValue[]>;

  getFlowImpactOf(
    impactCategory: o.Ref,
    enviFlow: o.EnviFlow,
  ): Promise<o.ImpactValue>;

  //#endregion

  //#region Cost results

  getTotalCosts(): Promise<o.CostValue>;

  getCostContributions(): Promise<o.TechFlowValue[]>;

  getDirectCostsOf(techFlow: o.TechFlow): Promise<o.CostValue>;

  getCostIntensitiesOf(techFlow: o.TechFlow): Promise<o.CostValue>;

  getTotalCostsOf(techFlow: o.TechFlow): Promise<o.CostValue>;

  //#endregion
}
