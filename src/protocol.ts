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
