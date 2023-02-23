import * as o from "./schema.ts";

type Ref<T extends o.RefEntity> = T | o.Ref;
type Num = number | string;

export function uuid(): string {
  let d = ((typeof performance !== "undefined") && performance.now)
    ? performance.now() * 1000
    : 0;
  if (d === 0) {
    d = new Date().getTime();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    r = (d + r) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x7 | 0x8)).toString(16);
  });
}

//#region units

export function createUnit(name: string, conversionFactor = 1.0): o.Unit {
  return o.Unit.of({
    name,
    id: uuid(),
    conversionFactor,
    isRefUnit: conversionFactor === 1.0,
  });
}

export function createUnitGroup(
  name: string,
  refUnit: string | o.Unit,
): o.UnitGroup {
  const unit = typeof refUnit === "string" ? createUnit(refUnit) : refUnit;
  const group = init(new o.UnitGroup(), name);
  group.units = [unit];
  return group;
}

export function createFlowProperty(
  name: string,
  unitGroup: Ref<o.UnitGroup>,
): o.FlowProperty {
  const prop = init(new o.FlowProperty(), name);
  prop.unitGroup = unitGroup instanceof o.UnitGroup
    ? unitGroup.toRef()
    : unitGroup;
  return prop;
}

//#endregion

//#region flows

export function createProduct(
  name: string,
  property: Ref<o.FlowProperty>,
): o.Flow {
  return createFlow(name, o.FlowType.PRODUCT_FLOW, property);
}

export function createWaste(
  name: string,
  property: Ref<o.FlowProperty>,
): o.Flow {
  return createFlow(name, o.FlowType.WASTE_FLOW, property);
}

export function createElementaryFlow(
  name: string,
  property: Ref<o.FlowProperty>,
): o.Flow {
  return createFlow(name, o.FlowType.ELEMENTARY_FLOW, property);
}

function createFlow(
  name: string,
  type: o.FlowType,
  property: Ref<o.FlowProperty>,
): o.Flow {
  const flow = init(new o.Flow(), name);
  flow.flowType = type;
  const propRef = property instanceof o.FlowProperty
    ? property.toRef()
    : property;
  flow.flowProperties = [
    o.FlowPropertyFactor.of({
      conversionFactor: 1.0,
      isRefFlowProperty: true,
      flowProperty: propRef,
    }),
  ];
  return flow;
}

//#endregion

//#region processes

export function createProcess(name: string, refFlow?: Ref<o.Flow>): o.Process {
  const process = init(new o.Process(), name);
  process.processType = o.ProcessType.UNIT_PROCESS;
  if (refFlow) {
    const qRef = refFlow.flowType === o.FlowType.WASTE_FLOW
      ? createInput(process, refFlow, 1.0)
      : createOutput(process, refFlow, 1.0);
    qRef.isQuantitativeReference = true;
  }
  return process;
}

export function createInput(
  process: o.Process,
  flow: Ref<o.Flow>,
  amount?: Num,
  unit?: Ref<o.Unit>,
): o.Exchange {
  const e = createExchange(process, flow, amount, unit);
  e.isInput = true;
  return e;
}

export function createOutput(
  process: o.Process,
  flow: Ref<o.Flow>,
  amount?: Num,
  unit?: Ref<o.Unit>,
): o.Exchange {
  const e = createExchange(process, flow, amount, unit);
  e.isInput = false;
  return e;
}

function createExchange(
  process: o.Process,
  flow: Ref<o.Flow>,
  amount?: Num,
  unit?: Ref<o.Unit>,
): o.Exchange {
  const flowRef = flow instanceof o.Flow ? flow.toRef() : flow;
  const id = process.lastInternalId ? process.lastInternalId + 1 : 1;
  process.lastInternalId = id;
  const e = o.Exchange.of({
    internalId: id,
    flow: flowRef,
  });
  if (isFloat(amount)) {
    e.amount = amount;
  } else {
    e.amountFormula = amount;
  }
  if (unit) {
    e.unit = unit instanceof o.Unit ? unit.toRef() : unit;
  }
  if (process.exchanges) {
    process.exchanges.push(e);
  } else {
    process.exchanges = [e];
  }
  return e;
}

export function createPhysicalAllocationFactor(
  process: o.Process,
  product: Ref<o.Flow>,
  value: Num,
) {
  const f = createAllocationFactor(process, product, value);
  f.allocationType = o.AllocationType.PHYSICAL_ALLOCATION;
  return f;
}

export function createEconomicAllocationFactor(
  process: o.Process,
  product: Ref<o.Flow>,
  value: Num,
) {
  const f = createAllocationFactor(process, product, value);
  f.allocationType = o.AllocationType.ECONOMIC_ALLOCATION;
  return f;
}

export function createCausalAllocationFactor(
  process: o.Process,
  product: Ref<o.Flow>,
  value: Num,
  exchange: o.Exchange | o.ExchangeRef,
) {
  const f = createAllocationFactor(process, product, value);
  f.allocationType = o.AllocationType.CAUSAL_ALLOCATION;
  f.exchange = exchange instanceof o.Exchange
    ? o.ExchangeRef.of({ internalId: exchange.internalId })
    : exchange;
  return f;
}

function createAllocationFactor(
  process: o.Process,
  product: Ref<o.Flow>,
  value: Num,
) {
  const factor = new o.AllocationFactor();
  factor.product = product instanceof o.Flow ? product.toRef() : product;
  if (isFloat(value)) {
    factor.value = value;
  } else {
    factor.formula = value;
  }
  if (process.allocationFactors) {
    process.allocationFactors.push(factor);
  } else {
    process.allocationFactors = [factor];
  }
  return factor;
}

//#endregion

export function createLocation(name: string, code?: string): o.Location {
  const loc = init(new o.Location(), name);
  loc.code = code || name;
  return loc;
}

export function createParameter(
  name: string,
  value: Num,
  scope = o.ParameterScope.GLOBAL_SCOPE,
): o.Parameter {
  const param = init(new o.Parameter(), name);
  param.parameterScope = scope;
  if (isFloat(value)) {
    param.isInputParameter = true;
    param.value = value;
  } else {
    param.isInputParameter = false;
    param.formula = value;
  }
  return param;
}

export function createImpactCategory(
  name: string,
  refUnit?: string,
): o.ImpactCategory {
  const i = init(new o.ImpactCategory(), name);
  i.refUnit = refUnit;
  return i;
}

export function createImpactFactor(
  indicator: o.ImpactCategory,
  flow: Ref<o.Flow>,
  value: Num,
  unit?: Ref<o.Unit>,
): o.ImpactFactor {
  const f = new o.ImpactFactor();
  f.flow = flow instanceof o.Flow ? flow.toRef() : flow;
  if (isFloat(value)) {
    f.value = value;
  } else {
    f.formula = value;
  }
  if (unit) {
    f.unit = unit instanceof o.Unit ? unit.toRef() : unit;
  }
  if (indicator.impactFactors) {
    indicator.impactFactors.push(f);
  } else {
    indicator.impactFactors = [f];
  }
  return f;
}

export function createImpactMethod(
  name: string,
  indicators?: Ref<o.ImpactCategory>[],
): o.ImpactMethod {
  const method = init(new o.ImpactMethod(), name);
  if (indicators) {
    method.impactCategories = indicators.map((i) =>
      i instanceof o.ImpactCategory ? i.toRef() : i
    );
  }
  return method;
}

function init<T extends o.RootEntity>(entity: T, name: string): T {
  entity.id = uuid();
  entity.name = name;
  entity.lastChange = new Date().toISOString();
  entity.version = "01.00.000";
  return entity;
}

function isFloat(n?: Num): n is number {
  return typeof n === "number";
}
