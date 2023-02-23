import * as o from "./schema.ts";

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
  unitGroup: o.UnitGroup | o.Ref,
): o.FlowProperty {
  const prop = init(new o.FlowProperty(), name);
  prop.unitGroup = unitGroup instanceof o.UnitGroup
    ? unitGroup.toRef()
    : unitGroup;
  return prop;
}



function init<T extends o.RootEntity>(entity: T, name: string): T {
  entity.id = uuid();
  entity.name = name;
  entity.lastChange = new Date().toISOString();
  entity.version = "01.00.000";
  return entity;
}
