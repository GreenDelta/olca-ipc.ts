import * as o from "./schema.ts"

type DictCons =  (dict: Record<string, unknown>) => o.RootEntity | null;

export function fromDictOf(type: o.RefType): DictCons {
  switch (type) {
    case o.RefType.Actor:
      return o.Actor.fromDict;
    case o.RefType.Currency :
      return o.Currency .fromDict;
    case o.RefType.DQSystem:
      return o.DQSystem.fromDict;
    case o.RefType.Epd :
      return o.Epd .fromDict;
    case o.RefType.Flow :
      return o.Flow .fromDict;
    case o.RefType.FlowMap:
      return o.FlowMap.fromDict;
    case o.RefType.FlowProperty:
      return o.FlowProperty.fromDict;
    case o.RefType.ImpactCategory:
      return o.ImpactCategory.fromDict;
    case o.RefType.ImpactMethod:
      return o.ImpactMethod.fromDict;
    case o.RefType.Location :
      return o.Location .fromDict;
    case o.RefType.NwSet:
      return o.NwSet.fromDict;
    case o.RefType.Parameter :
      return o.Parameter .fromDict;
    case o.RefType.Process :
      return o.Process .fromDict;
    case o.RefType.ProductSystem:
      return o.ProductSystem.fromDict;
    case o.RefType.Project :
      return o.Project .fromDict;
    case o.RefType.Result :
      return o.Result .fromDict;
    case o.RefType.SocialIndicator:
      return o.SocialIndicator.fromDict;
    case o.RefType.Source :
      return o.Source .fromDict;
    case o.RefType.Unit :
      return o.Unit .fromDict;
    case o.RefType.UnitGroup:
      return o.UnitGroup.fromDict;
  }
}
