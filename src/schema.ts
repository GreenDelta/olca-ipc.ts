
// this file was generated automatically; do not change it but help to make
// the code generator better; see:
// https://github.com/GreenDelta/olca-schema/tree/master/osch

// #region: utils
type Dict = Record<string, unknown>;

interface Dictable {
  toDict: () => Dict,
}

function ifPresent<T>(val: T | undefined, consumer: (val: T) => void) {
  if (val !== null && val !== undefined) {
    consumer(val);
  }
}

function dictAll(list: Array<Dictable> | null): Array<Dict> {
  return list ? list.map(e => e.toDict()) : [];
}
// #endregion

export enum RefType {
  Actor = "Actor",
  Currency = "Currency",
  DQSystem = "DQSystem",
  Epd = "Epd",
  Flow = "Flow",
  FlowMap = "FlowMap",
  FlowProperty = "FlowProperty",
  ImpactCategory = "ImpactCategory",
  ImpactMethod = "ImpactMethod",
  Location = "Location",
  NwSet = "NwSet",
  Parameter = "Parameter",
  Process = "Process",
  ProductSystem = "ProductSystem",
  Project = "Project",
  Result = "Result",
  RootEntity = "RootEntity",
  SocialIndicator = "SocialIndicator",
  Source = "Source",
  Unit = "Unit",
  UnitGroup = "UnitGroup",
}

export enum AllocationType {
  PHYSICAL_ALLOCATION = "PHYSICAL_ALLOCATION",
  ECONOMIC_ALLOCATION = "ECONOMIC_ALLOCATION",
  CAUSAL_ALLOCATION = "CAUSAL_ALLOCATION",
  USE_DEFAULT_ALLOCATION = "USE_DEFAULT_ALLOCATION",
  NO_ALLOCATION = "NO_ALLOCATION",
}

export enum Direction {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

export enum FlowPropertyType {
  ECONOMIC_QUANTITY = "ECONOMIC_QUANTITY",
  PHYSICAL_QUANTITY = "PHYSICAL_QUANTITY",
}

export enum FlowType {
  ELEMENTARY_FLOW = "ELEMENTARY_FLOW",
  PRODUCT_FLOW = "PRODUCT_FLOW",
  WASTE_FLOW = "WASTE_FLOW",
}

export enum ModelType {
  ACTOR = "ACTOR",
  CATEGORY = "CATEGORY",
  CURRENCY = "CURRENCY",
  DQ_SYSTEM = "DQ_SYSTEM",
  EPD = "EPD",
  FLOW = "FLOW",
  FLOW_PROPERTY = "FLOW_PROPERTY",
  IMPACT_CATEGORY = "IMPACT_CATEGORY",
  IMPACT_METHOD = "IMPACT_METHOD",
  LOCATION = "LOCATION",
  PARAMETER = "PARAMETER",
  PROCESS = "PROCESS",
  PRODUCT_SYSTEM = "PRODUCT_SYSTEM",
  PROJECT = "PROJECT",
  RESULT = "RESULT",
  SOCIAL_INDICATOR = "SOCIAL_INDICATOR",
  SOURCE = "SOURCE",
  UNIT_GROUP = "UNIT_GROUP",
}

export enum ParameterScope {
  PROCESS_SCOPE = "PROCESS_SCOPE",
  IMPACT_SCOPE = "IMPACT_SCOPE",
  GLOBAL_SCOPE = "GLOBAL_SCOPE",
}

export enum ProcessType {
  LCI_RESULT = "LCI_RESULT",
  UNIT_PROCESS = "UNIT_PROCESS",
}

export enum ProviderLinking {
  IGNORE_DEFAULTS = "IGNORE_DEFAULTS",
  PREFER_DEFAULTS = "PREFER_DEFAULTS",
  ONLY_DEFAULTS = "ONLY_DEFAULTS",
}

export enum RiskLevel {
  NO_OPPORTUNITY = "NO_OPPORTUNITY",
  HIGH_OPPORTUNITY = "HIGH_OPPORTUNITY",
  MEDIUM_OPPORTUNITY = "MEDIUM_OPPORTUNITY",
  LOW_OPPORTUNITY = "LOW_OPPORTUNITY",
  NO_RISK = "NO_RISK",
  VERY_LOW_RISK = "VERY_LOW_RISK",
  LOW_RISK = "LOW_RISK",
  MEDIUM_RISK = "MEDIUM_RISK",
  HIGH_RISK = "HIGH_RISK",
  VERY_HIGH_RISK = "VERY_HIGH_RISK",
  NO_DATA = "NO_DATA",
  NOT_APPLICABLE = "NOT_APPLICABLE",
}

export enum UncertaintyType {
  LOG_NORMAL_DISTRIBUTION = "LOG_NORMAL_DISTRIBUTION",
  NORMAL_DISTRIBUTION = "NORMAL_DISTRIBUTION",
  TRIANGLE_DISTRIBUTION = "TRIANGLE_DISTRIBUTION",
  UNIFORM_DISTRIBUTION = "UNIFORM_DISTRIBUTION",
}

interface IActor {
  id?: string | null;
  address?: string | null;
  category?: string | null;
  city?: string | null;
  country?: string | null;
  description?: string | null;
  email?: string | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  telefax?: string | null;
  telephone?: string | null;
  version?: string | null;
  website?: string | null;
  zipCode?: string | null;
}

export class Actor {
  id?: string | null;
  address?: string | null;
  category?: string | null;
  city?: string | null;
  country?: string | null;
  description?: string | null;
  email?: string | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  telefax?: string | null;
  telephone?: string | null;
  version?: string | null;
  website?: string | null;
  zipCode?: string | null;

  static of(i: IActor): Actor {
    const e = new Actor();
    e.id = i.id;
    e.address = i.address;
    e.category = i.category;
    e.city = i.city;
    e.country = i.country;
    e.description = i.description;
    e.email = i.email;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.tags = i.tags;
    e.telefax = i.telefax;
    e.telephone = i.telephone;
    e.version = i.version;
    e.website = i.website;
    e.zipCode = i.zipCode;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Actor,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Actor";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.address, v => d.address = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.city, v => d.city = v);
    ifPresent(this.country, v => d.country = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.email, v => d.email = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.telefax, v => d.telefax = v);
    ifPresent(this.telephone, v => d.telephone = v);
    ifPresent(this.version, v => d.version = v);
    ifPresent(this.website, v => d.website = v);
    ifPresent(this.zipCode, v => d.zipCode = v);
    return d;
  }

  static fromDict(d: Dict): Actor | null {
    if (!d) return null;
    const e = new Actor();
    e.id = d["@id"] as string;
    e.address = d.address as string;
    e.category = d.category as string;
    e.city = d.city as string;
    e.country = d.country as string;
    e.description = d.description as string;
    e.email = d.email as string;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.tags = d.tags as string[];
    e.telefax = d.telefax as string;
    e.telephone = d.telephone as string;
    e.version = d.version as string;
    e.website = d.website as string;
    e.zipCode = d.zipCode as string;
    return e;
  }

  static fromJson(json: string | Dict): Actor | null {
    return typeof json === "string"
      ? Actor.fromDict(JSON.parse(json) as Dict)
      : Actor.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IAllocationFactor {
  allocationType?: AllocationType | null;
  exchange?: ExchangeRef | null;
  formula?: string | null;
  product?: Ref | null;
  value?: number | null;
}

export class AllocationFactor {
  allocationType?: AllocationType | null;
  exchange?: ExchangeRef | null;
  formula?: string | null;
  product?: Ref | null;
  value?: number | null;

  static of(i: IAllocationFactor): AllocationFactor {
    const e = new AllocationFactor();
    e.allocationType = i.allocationType;
    e.exchange = i.exchange;
    e.formula = i.formula;
    e.product = i.product;
    e.value = i.value;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.allocationType, v => d.allocationType = v);
    ifPresent(this.exchange, v => d.exchange = v?.toDict());
    ifPresent(this.formula, v => d.formula = v);
    ifPresent(this.product, v => d.product = v?.toDict());
    ifPresent(this.value, v => d.value = v);
    return d;
  }

  static fromDict(d: Dict): AllocationFactor | null {
    if (!d) return null;
    const e = new AllocationFactor();
    e.allocationType = d.allocationType as AllocationType;
    e.exchange = ExchangeRef.fromDict(d.exchange as Dict);
    e.formula = d.formula as string;
    e.product = Ref.fromDict(d.product as Dict);
    e.value = d.value as number;
    return e;
  }

  static fromJson(json: string | Dict): AllocationFactor | null {
    return typeof json === "string"
      ? AllocationFactor.fromDict(JSON.parse(json) as Dict)
      : AllocationFactor.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ICurrency {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  conversionFactor?: number | null;
  description?: string | null;
  lastChange?: string | null;
  name?: string | null;
  refCurrency?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;
}

export class Currency {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  conversionFactor?: number | null;
  description?: string | null;
  lastChange?: string | null;
  name?: string | null;
  refCurrency?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;

  static of(i: ICurrency): Currency {
    const e = new Currency();
    e.id = i.id;
    e.category = i.category;
    e.code = i.code;
    e.conversionFactor = i.conversionFactor;
    e.description = i.description;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.refCurrency = i.refCurrency;
    e.tags = i.tags;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Currency,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Currency";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.code, v => d.code = v);
    ifPresent(this.conversionFactor, v => d.conversionFactor = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.refCurrency, v => d.refCurrency = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): Currency | null {
    if (!d) return null;
    const e = new Currency();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.code = d.code as string;
    e.conversionFactor = d.conversionFactor as number;
    e.description = d.description as string;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.refCurrency = Ref.fromDict(d.refCurrency as Dict);
    e.tags = d.tags as string[];
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): Currency | null {
    return typeof json === "string"
      ? Currency.fromDict(JSON.parse(json) as Dict)
      : Currency.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IDQIndicator {
  name?: string | null;
  position?: number | null;
  scores?: Array<DQScore> | null;
}

export class DQIndicator {
  name?: string | null;
  position?: number | null;
  scores?: Array<DQScore> | null;

  static of(i: IDQIndicator): DQIndicator {
    const e = new DQIndicator();
    e.name = i.name;
    e.position = i.position;
    e.scores = i.scores;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.position, v => d.position = v);
    ifPresent(this.scores, v => d.scores = dictAll(v));
    return d;
  }

  static fromDict(d: Dict): DQIndicator | null {
    if (!d) return null;
    const e = new DQIndicator();
    e.name = d.name as string;
    e.position = d.position as number;
    e.scores = d.scores
      ? (d.scores as Dict[]).map(DQScore.fromDict) as DQScore[]
      : null;
    return e;
  }

  static fromJson(json: string | Dict): DQIndicator | null {
    return typeof json === "string"
      ? DQIndicator.fromDict(JSON.parse(json) as Dict)
      : DQIndicator.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IDQScore {
  description?: string | null;
  label?: string | null;
  position?: number | null;
  uncertainty?: number | null;
}

export class DQScore {
  description?: string | null;
  label?: string | null;
  position?: number | null;
  uncertainty?: number | null;

  static of(i: IDQScore): DQScore {
    const e = new DQScore();
    e.description = i.description;
    e.label = i.label;
    e.position = i.position;
    e.uncertainty = i.uncertainty;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.label, v => d.label = v);
    ifPresent(this.position, v => d.position = v);
    ifPresent(this.uncertainty, v => d.uncertainty = v);
    return d;
  }

  static fromDict(d: Dict): DQScore | null {
    if (!d) return null;
    const e = new DQScore();
    e.description = d.description as string;
    e.label = d.label as string;
    e.position = d.position as number;
    e.uncertainty = d.uncertainty as number;
    return e;
  }

  static fromJson(json: string | Dict): DQScore | null {
    return typeof json === "string"
      ? DQScore.fromDict(JSON.parse(json) as Dict)
      : DQScore.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IDQSystem {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  hasUncertainties?: boolean | null;
  indicators?: Array<DQIndicator> | null;
  lastChange?: string | null;
  name?: string | null;
  source?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;
}

export class DQSystem {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  hasUncertainties?: boolean | null;
  indicators?: Array<DQIndicator> | null;
  lastChange?: string | null;
  name?: string | null;
  source?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;

  static of(i: IDQSystem): DQSystem {
    const e = new DQSystem();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.hasUncertainties = i.hasUncertainties;
    e.indicators = i.indicators;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.source = i.source;
    e.tags = i.tags;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.DQSystem,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "DQSystem";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.hasUncertainties, v => d.hasUncertainties = v);
    ifPresent(this.indicators, v => d.indicators = dictAll(v));
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.source, v => d.source = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): DQSystem | null {
    if (!d) return null;
    const e = new DQSystem();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.hasUncertainties = d.hasUncertainties as boolean;
    e.indicators = d.indicators
      ? (d.indicators as Dict[]).map(DQIndicator.fromDict) as DQIndicator[]
      : null;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.source = Ref.fromDict(d.source as Dict);
    e.tags = d.tags as string[];
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): DQSystem | null {
    return typeof json === "string"
      ? DQSystem.fromDict(JSON.parse(json) as Dict)
      : DQSystem.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IEpd {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  lastChange?: string | null;
  manufacturer?: Ref | null;
  modules?: Array<EpdModule> | null;
  name?: string | null;
  pcr?: Ref | null;
  product?: EpdProduct | null;
  programOperator?: Ref | null;
  tags?: Array<string> | null;
  urn?: string | null;
  verifier?: Ref | null;
  version?: string | null;
}

export class Epd {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  lastChange?: string | null;
  manufacturer?: Ref | null;
  modules?: Array<EpdModule> | null;
  name?: string | null;
  pcr?: Ref | null;
  product?: EpdProduct | null;
  programOperator?: Ref | null;
  tags?: Array<string> | null;
  urn?: string | null;
  verifier?: Ref | null;
  version?: string | null;

  static of(i: IEpd): Epd {
    const e = new Epd();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.lastChange = i.lastChange;
    e.manufacturer = i.manufacturer;
    e.modules = i.modules;
    e.name = i.name;
    e.pcr = i.pcr;
    e.product = i.product;
    e.programOperator = i.programOperator;
    e.tags = i.tags;
    e.urn = i.urn;
    e.verifier = i.verifier;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Epd,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Epd";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.manufacturer, v => d.manufacturer = v?.toDict());
    ifPresent(this.modules, v => d.modules = dictAll(v));
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.pcr, v => d.pcr = v?.toDict());
    ifPresent(this.product, v => d.product = v?.toDict());
    ifPresent(this.programOperator, v => d.programOperator = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.urn, v => d.urn = v);
    ifPresent(this.verifier, v => d.verifier = v?.toDict());
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): Epd | null {
    if (!d) return null;
    const e = new Epd();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.lastChange = d.lastChange as string;
    e.manufacturer = Ref.fromDict(d.manufacturer as Dict);
    e.modules = d.modules
      ? (d.modules as Dict[]).map(EpdModule.fromDict) as EpdModule[]
      : null;
    e.name = d.name as string;
    e.pcr = Ref.fromDict(d.pcr as Dict);
    e.product = EpdProduct.fromDict(d.product as Dict);
    e.programOperator = Ref.fromDict(d.programOperator as Dict);
    e.tags = d.tags as string[];
    e.urn = d.urn as string;
    e.verifier = Ref.fromDict(d.verifier as Dict);
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): Epd | null {
    return typeof json === "string"
      ? Epd.fromDict(JSON.parse(json) as Dict)
      : Epd.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IEpdModule {
  multiplier?: number | null;
  name?: string | null;
  result?: Ref | null;
}

export class EpdModule {
  multiplier?: number | null;
  name?: string | null;
  result?: Ref | null;

  static of(i: IEpdModule): EpdModule {
    const e = new EpdModule();
    e.multiplier = i.multiplier;
    e.name = i.name;
    e.result = i.result;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.multiplier, v => d.multiplier = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.result, v => d.result = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): EpdModule | null {
    if (!d) return null;
    const e = new EpdModule();
    e.multiplier = d.multiplier as number;
    e.name = d.name as string;
    e.result = Ref.fromDict(d.result as Dict);
    return e;
  }

  static fromJson(json: string | Dict): EpdModule | null {
    return typeof json === "string"
      ? EpdModule.fromDict(JSON.parse(json) as Dict)
      : EpdModule.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IEpdProduct {
  amount?: number | null;
  flow?: Ref | null;
  flowProperty?: Ref | null;
  unit?: Ref | null;
}

export class EpdProduct {
  amount?: number | null;
  flow?: Ref | null;
  flowProperty?: Ref | null;
  unit?: Ref | null;

  static of(i: IEpdProduct): EpdProduct {
    const e = new EpdProduct();
    e.amount = i.amount;
    e.flow = i.flow;
    e.flowProperty = i.flowProperty;
    e.unit = i.unit;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.flow, v => d.flow = v?.toDict());
    ifPresent(this.flowProperty, v => d.flowProperty = v?.toDict());
    ifPresent(this.unit, v => d.unit = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): EpdProduct | null {
    if (!d) return null;
    const e = new EpdProduct();
    e.amount = d.amount as number;
    e.flow = Ref.fromDict(d.flow as Dict);
    e.flowProperty = Ref.fromDict(d.flowProperty as Dict);
    e.unit = Ref.fromDict(d.unit as Dict);
    return e;
  }

  static fromJson(json: string | Dict): EpdProduct | null {
    return typeof json === "string"
      ? EpdProduct.fromDict(JSON.parse(json) as Dict)
      : EpdProduct.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IExchange {
  amount?: number | null;
  amountFormula?: string | null;
  baseUncertainty?: number | null;
  costFormula?: string | null;
  costValue?: number | null;
  currency?: Ref | null;
  defaultProvider?: Ref | null;
  description?: string | null;
  dqEntry?: string | null;
  flow?: Ref | null;
  flowProperty?: Ref | null;
  internalId?: number | null;
  isAvoidedProduct?: boolean | null;
  isInput?: boolean | null;
  isQuantitativeReference?: boolean | null;
  location?: Ref | null;
  uncertainty?: Uncertainty | null;
  unit?: Ref | null;
}

export class Exchange {
  amount?: number | null;
  amountFormula?: string | null;
  baseUncertainty?: number | null;
  costFormula?: string | null;
  costValue?: number | null;
  currency?: Ref | null;
  defaultProvider?: Ref | null;
  description?: string | null;
  dqEntry?: string | null;
  flow?: Ref | null;
  flowProperty?: Ref | null;
  internalId?: number | null;
  isAvoidedProduct?: boolean | null;
  isInput?: boolean | null;
  isQuantitativeReference?: boolean | null;
  location?: Ref | null;
  uncertainty?: Uncertainty | null;
  unit?: Ref | null;

  static of(i: IExchange): Exchange {
    const e = new Exchange();
    e.amount = i.amount;
    e.amountFormula = i.amountFormula;
    e.baseUncertainty = i.baseUncertainty;
    e.costFormula = i.costFormula;
    e.costValue = i.costValue;
    e.currency = i.currency;
    e.defaultProvider = i.defaultProvider;
    e.description = i.description;
    e.dqEntry = i.dqEntry;
    e.flow = i.flow;
    e.flowProperty = i.flowProperty;
    e.internalId = i.internalId;
    e.isAvoidedProduct = i.isAvoidedProduct;
    e.isInput = i.isInput;
    e.isQuantitativeReference = i.isQuantitativeReference;
    e.location = i.location;
    e.uncertainty = i.uncertainty;
    e.unit = i.unit;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.amountFormula, v => d.amountFormula = v);
    ifPresent(this.baseUncertainty, v => d.baseUncertainty = v);
    ifPresent(this.costFormula, v => d.costFormula = v);
    ifPresent(this.costValue, v => d.costValue = v);
    ifPresent(this.currency, v => d.currency = v?.toDict());
    ifPresent(this.defaultProvider, v => d.defaultProvider = v?.toDict());
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.dqEntry, v => d.dqEntry = v);
    ifPresent(this.flow, v => d.flow = v?.toDict());
    ifPresent(this.flowProperty, v => d.flowProperty = v?.toDict());
    ifPresent(this.internalId, v => d.internalId = v);
    ifPresent(this.isAvoidedProduct, v => d.isAvoidedProduct = v);
    ifPresent(this.isInput, v => d.isInput = v);
    ifPresent(this.isQuantitativeReference, v => d.isQuantitativeReference = v);
    ifPresent(this.location, v => d.location = v?.toDict());
    ifPresent(this.uncertainty, v => d.uncertainty = v?.toDict());
    ifPresent(this.unit, v => d.unit = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): Exchange | null {
    if (!d) return null;
    const e = new Exchange();
    e.amount = d.amount as number;
    e.amountFormula = d.amountFormula as string;
    e.baseUncertainty = d.baseUncertainty as number;
    e.costFormula = d.costFormula as string;
    e.costValue = d.costValue as number;
    e.currency = Ref.fromDict(d.currency as Dict);
    e.defaultProvider = Ref.fromDict(d.defaultProvider as Dict);
    e.description = d.description as string;
    e.dqEntry = d.dqEntry as string;
    e.flow = Ref.fromDict(d.flow as Dict);
    e.flowProperty = Ref.fromDict(d.flowProperty as Dict);
    e.internalId = d.internalId as number;
    e.isAvoidedProduct = d.isAvoidedProduct as boolean;
    e.isInput = d.isInput as boolean;
    e.isQuantitativeReference = d.isQuantitativeReference as boolean;
    e.location = Ref.fromDict(d.location as Dict);
    e.uncertainty = Uncertainty.fromDict(d.uncertainty as Dict);
    e.unit = Ref.fromDict(d.unit as Dict);
    return e;
  }

  static fromJson(json: string | Dict): Exchange | null {
    return typeof json === "string"
      ? Exchange.fromDict(JSON.parse(json) as Dict)
      : Exchange.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IExchangeRef {
  internalId?: number | null;
}

export class ExchangeRef {
  internalId?: number | null;

  static of(i: IExchangeRef): ExchangeRef {
    const e = new ExchangeRef();
    e.internalId = i.internalId;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.internalId, v => d.internalId = v);
    return d;
  }

  static fromDict(d: Dict): ExchangeRef | null {
    if (!d) return null;
    const e = new ExchangeRef();
    e.internalId = d.internalId as number;
    return e;
  }

  static fromJson(json: string | Dict): ExchangeRef | null {
    return typeof json === "string"
      ? ExchangeRef.fromDict(JSON.parse(json) as Dict)
      : ExchangeRef.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IFlow {
  id?: string | null;
  cas?: string | null;
  category?: string | null;
  description?: string | null;
  flowProperties?: Array<FlowPropertyFactor> | null;
  flowType?: FlowType | null;
  formula?: string | null;
  isInfrastructureFlow?: boolean | null;
  lastChange?: string | null;
  location?: Ref | null;
  name?: string | null;
  synonyms?: string | null;
  tags?: Array<string> | null;
  version?: string | null;
}

export class Flow {
  id?: string | null;
  cas?: string | null;
  category?: string | null;
  description?: string | null;
  flowProperties?: Array<FlowPropertyFactor> | null;
  flowType?: FlowType | null;
  formula?: string | null;
  isInfrastructureFlow?: boolean | null;
  lastChange?: string | null;
  location?: Ref | null;
  name?: string | null;
  synonyms?: string | null;
  tags?: Array<string> | null;
  version?: string | null;

  static of(i: IFlow): Flow {
    const e = new Flow();
    e.id = i.id;
    e.cas = i.cas;
    e.category = i.category;
    e.description = i.description;
    e.flowProperties = i.flowProperties;
    e.flowType = i.flowType;
    e.formula = i.formula;
    e.isInfrastructureFlow = i.isInfrastructureFlow;
    e.lastChange = i.lastChange;
    e.location = i.location;
    e.name = i.name;
    e.synonyms = i.synonyms;
    e.tags = i.tags;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Flow,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Flow";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.cas, v => d.cas = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.flowProperties, v => d.flowProperties = dictAll(v));
    ifPresent(this.flowType, v => d.flowType = v);
    ifPresent(this.formula, v => d.formula = v);
    ifPresent(this.isInfrastructureFlow, v => d.isInfrastructureFlow = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.location, v => d.location = v?.toDict());
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.synonyms, v => d.synonyms = v);
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): Flow | null {
    if (!d) return null;
    const e = new Flow();
    e.id = d["@id"] as string;
    e.cas = d.cas as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.flowProperties = d.flowProperties
      ? (d.flowProperties as Dict[]).map(FlowPropertyFactor.fromDict) as FlowPropertyFactor[]
      : null;
    e.flowType = d.flowType as FlowType;
    e.formula = d.formula as string;
    e.isInfrastructureFlow = d.isInfrastructureFlow as boolean;
    e.lastChange = d.lastChange as string;
    e.location = Ref.fromDict(d.location as Dict);
    e.name = d.name as string;
    e.synonyms = d.synonyms as string;
    e.tags = d.tags as string[];
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): Flow | null {
    return typeof json === "string"
      ? Flow.fromDict(JSON.parse(json) as Dict)
      : Flow.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IFlowMap {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  lastChange?: string | null;
  mappings?: Array<FlowMapEntry> | null;
  name?: string | null;
  source?: Ref | null;
  tags?: Array<string> | null;
  target?: Ref | null;
  version?: string | null;
}

export class FlowMap {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  lastChange?: string | null;
  mappings?: Array<FlowMapEntry> | null;
  name?: string | null;
  source?: Ref | null;
  tags?: Array<string> | null;
  target?: Ref | null;
  version?: string | null;

  static of(i: IFlowMap): FlowMap {
    const e = new FlowMap();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.lastChange = i.lastChange;
    e.mappings = i.mappings;
    e.name = i.name;
    e.source = i.source;
    e.tags = i.tags;
    e.target = i.target;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.FlowMap,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "FlowMap";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.mappings, v => d.mappings = dictAll(v));
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.source, v => d.source = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.target, v => d.target = v?.toDict());
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): FlowMap | null {
    if (!d) return null;
    const e = new FlowMap();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.lastChange = d.lastChange as string;
    e.mappings = d.mappings
      ? (d.mappings as Dict[]).map(FlowMapEntry.fromDict) as FlowMapEntry[]
      : null;
    e.name = d.name as string;
    e.source = Ref.fromDict(d.source as Dict);
    e.tags = d.tags as string[];
    e.target = Ref.fromDict(d.target as Dict);
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): FlowMap | null {
    return typeof json === "string"
      ? FlowMap.fromDict(JSON.parse(json) as Dict)
      : FlowMap.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IFlowMapEntry {
  conversionFactor?: number | null;
  from?: FlowMapRef | null;
  to?: FlowMapRef | null;
}

export class FlowMapEntry {
  conversionFactor?: number | null;
  from?: FlowMapRef | null;
  to?: FlowMapRef | null;

  static of(i: IFlowMapEntry): FlowMapEntry {
    const e = new FlowMapEntry();
    e.conversionFactor = i.conversionFactor;
    e.from = i.from;
    e.to = i.to;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.conversionFactor, v => d.conversionFactor = v);
    ifPresent(this.from, v => d.from = v?.toDict());
    ifPresent(this.to, v => d.to = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): FlowMapEntry | null {
    if (!d) return null;
    const e = new FlowMapEntry();
    e.conversionFactor = d.conversionFactor as number;
    e.from = FlowMapRef.fromDict(d.from as Dict);
    e.to = FlowMapRef.fromDict(d.to as Dict);
    return e;
  }

  static fromJson(json: string | Dict): FlowMapEntry | null {
    return typeof json === "string"
      ? FlowMapEntry.fromDict(JSON.parse(json) as Dict)
      : FlowMapEntry.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IFlowMapRef {
  flow?: Ref | null;
  flowProperty?: Ref | null;
  provider?: Ref | null;
  unit?: Ref | null;
}

export class FlowMapRef {
  flow?: Ref | null;
  flowProperty?: Ref | null;
  provider?: Ref | null;
  unit?: Ref | null;

  static of(i: IFlowMapRef): FlowMapRef {
    const e = new FlowMapRef();
    e.flow = i.flow;
    e.flowProperty = i.flowProperty;
    e.provider = i.provider;
    e.unit = i.unit;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.flow, v => d.flow = v?.toDict());
    ifPresent(this.flowProperty, v => d.flowProperty = v?.toDict());
    ifPresent(this.provider, v => d.provider = v?.toDict());
    ifPresent(this.unit, v => d.unit = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): FlowMapRef | null {
    if (!d) return null;
    const e = new FlowMapRef();
    e.flow = Ref.fromDict(d.flow as Dict);
    e.flowProperty = Ref.fromDict(d.flowProperty as Dict);
    e.provider = Ref.fromDict(d.provider as Dict);
    e.unit = Ref.fromDict(d.unit as Dict);
    return e;
  }

  static fromJson(json: string | Dict): FlowMapRef | null {
    return typeof json === "string"
      ? FlowMapRef.fromDict(JSON.parse(json) as Dict)
      : FlowMapRef.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IFlowProperty {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  flowPropertyType?: FlowPropertyType | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  unitGroup?: Ref | null;
  version?: string | null;
}

export class FlowProperty {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  flowPropertyType?: FlowPropertyType | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  unitGroup?: Ref | null;
  version?: string | null;

  static of(i: IFlowProperty): FlowProperty {
    const e = new FlowProperty();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.flowPropertyType = i.flowPropertyType;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.tags = i.tags;
    e.unitGroup = i.unitGroup;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.FlowProperty,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "FlowProperty";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.flowPropertyType, v => d.flowPropertyType = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.unitGroup, v => d.unitGroup = v?.toDict());
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): FlowProperty | null {
    if (!d) return null;
    const e = new FlowProperty();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.flowPropertyType = d.flowPropertyType as FlowPropertyType;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.tags = d.tags as string[];
    e.unitGroup = Ref.fromDict(d.unitGroup as Dict);
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): FlowProperty | null {
    return typeof json === "string"
      ? FlowProperty.fromDict(JSON.parse(json) as Dict)
      : FlowProperty.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IFlowPropertyFactor {
  conversionFactor?: number | null;
  flowProperty?: Ref | null;
  isRefFlowProperty?: boolean | null;
}

export class FlowPropertyFactor {
  conversionFactor?: number | null;
  flowProperty?: Ref | null;
  isRefFlowProperty?: boolean | null;

  static of(i: IFlowPropertyFactor): FlowPropertyFactor {
    const e = new FlowPropertyFactor();
    e.conversionFactor = i.conversionFactor;
    e.flowProperty = i.flowProperty;
    e.isRefFlowProperty = i.isRefFlowProperty;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.conversionFactor, v => d.conversionFactor = v);
    ifPresent(this.flowProperty, v => d.flowProperty = v?.toDict());
    ifPresent(this.isRefFlowProperty, v => d.isRefFlowProperty = v);
    return d;
  }

  static fromDict(d: Dict): FlowPropertyFactor | null {
    if (!d) return null;
    const e = new FlowPropertyFactor();
    e.conversionFactor = d.conversionFactor as number;
    e.flowProperty = Ref.fromDict(d.flowProperty as Dict);
    e.isRefFlowProperty = d.isRefFlowProperty as boolean;
    return e;
  }

  static fromJson(json: string | Dict): FlowPropertyFactor | null {
    return typeof json === "string"
      ? FlowPropertyFactor.fromDict(JSON.parse(json) as Dict)
      : FlowPropertyFactor.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IFlowResult {
  amount?: number | null;
  description?: string | null;
  flow?: Ref | null;
  flowProperty?: Ref | null;
  isInput?: boolean | null;
  isRefFlow?: boolean | null;
  location?: Ref | null;
  unit?: Ref | null;
}

export class FlowResult {
  amount?: number | null;
  description?: string | null;
  flow?: Ref | null;
  flowProperty?: Ref | null;
  isInput?: boolean | null;
  isRefFlow?: boolean | null;
  location?: Ref | null;
  unit?: Ref | null;

  static of(i: IFlowResult): FlowResult {
    const e = new FlowResult();
    e.amount = i.amount;
    e.description = i.description;
    e.flow = i.flow;
    e.flowProperty = i.flowProperty;
    e.isInput = i.isInput;
    e.isRefFlow = i.isRefFlow;
    e.location = i.location;
    e.unit = i.unit;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.flow, v => d.flow = v?.toDict());
    ifPresent(this.flowProperty, v => d.flowProperty = v?.toDict());
    ifPresent(this.isInput, v => d.isInput = v);
    ifPresent(this.isRefFlow, v => d.isRefFlow = v);
    ifPresent(this.location, v => d.location = v?.toDict());
    ifPresent(this.unit, v => d.unit = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): FlowResult | null {
    if (!d) return null;
    const e = new FlowResult();
    e.amount = d.amount as number;
    e.description = d.description as string;
    e.flow = Ref.fromDict(d.flow as Dict);
    e.flowProperty = Ref.fromDict(d.flowProperty as Dict);
    e.isInput = d.isInput as boolean;
    e.isRefFlow = d.isRefFlow as boolean;
    e.location = Ref.fromDict(d.location as Dict);
    e.unit = Ref.fromDict(d.unit as Dict);
    return e;
  }

  static fromJson(json: string | Dict): FlowResult | null {
    return typeof json === "string"
      ? FlowResult.fromDict(JSON.parse(json) as Dict)
      : FlowResult.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IImpactCategory {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  direction?: Direction | null;
  impactFactors?: Array<ImpactFactor> | null;
  lastChange?: string | null;
  name?: string | null;
  parameters?: Array<Parameter> | null;
  refUnit?: string | null;
  source?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;
}

export class ImpactCategory {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  direction?: Direction | null;
  impactFactors?: Array<ImpactFactor> | null;
  lastChange?: string | null;
  name?: string | null;
  parameters?: Array<Parameter> | null;
  refUnit?: string | null;
  source?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;

  static of(i: IImpactCategory): ImpactCategory {
    const e = new ImpactCategory();
    e.id = i.id;
    e.category = i.category;
    e.code = i.code;
    e.description = i.description;
    e.direction = i.direction;
    e.impactFactors = i.impactFactors;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.parameters = i.parameters;
    e.refUnit = i.refUnit;
    e.source = i.source;
    e.tags = i.tags;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.ImpactCategory,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "ImpactCategory";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.code, v => d.code = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.direction, v => d.direction = v);
    ifPresent(this.impactFactors, v => d.impactFactors = dictAll(v));
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.parameters, v => d.parameters = dictAll(v));
    ifPresent(this.refUnit, v => d.refUnit = v);
    ifPresent(this.source, v => d.source = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): ImpactCategory | null {
    if (!d) return null;
    const e = new ImpactCategory();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.code = d.code as string;
    e.description = d.description as string;
    e.direction = d.direction as Direction;
    e.impactFactors = d.impactFactors
      ? (d.impactFactors as Dict[]).map(ImpactFactor.fromDict) as ImpactFactor[]
      : null;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.parameters = d.parameters
      ? (d.parameters as Dict[]).map(Parameter.fromDict) as Parameter[]
      : null;
    e.refUnit = d.refUnit as string;
    e.source = Ref.fromDict(d.source as Dict);
    e.tags = d.tags as string[];
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): ImpactCategory | null {
    return typeof json === "string"
      ? ImpactCategory.fromDict(JSON.parse(json) as Dict)
      : ImpactCategory.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IImpactFactor {
  flow?: Ref | null;
  flowProperty?: Ref | null;
  formula?: string | null;
  location?: Ref | null;
  uncertainty?: Uncertainty | null;
  unit?: Ref | null;
  value?: number | null;
}

export class ImpactFactor {
  flow?: Ref | null;
  flowProperty?: Ref | null;
  formula?: string | null;
  location?: Ref | null;
  uncertainty?: Uncertainty | null;
  unit?: Ref | null;
  value?: number | null;

  static of(i: IImpactFactor): ImpactFactor {
    const e = new ImpactFactor();
    e.flow = i.flow;
    e.flowProperty = i.flowProperty;
    e.formula = i.formula;
    e.location = i.location;
    e.uncertainty = i.uncertainty;
    e.unit = i.unit;
    e.value = i.value;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.flow, v => d.flow = v?.toDict());
    ifPresent(this.flowProperty, v => d.flowProperty = v?.toDict());
    ifPresent(this.formula, v => d.formula = v);
    ifPresent(this.location, v => d.location = v?.toDict());
    ifPresent(this.uncertainty, v => d.uncertainty = v?.toDict());
    ifPresent(this.unit, v => d.unit = v?.toDict());
    ifPresent(this.value, v => d.value = v);
    return d;
  }

  static fromDict(d: Dict): ImpactFactor | null {
    if (!d) return null;
    const e = new ImpactFactor();
    e.flow = Ref.fromDict(d.flow as Dict);
    e.flowProperty = Ref.fromDict(d.flowProperty as Dict);
    e.formula = d.formula as string;
    e.location = Ref.fromDict(d.location as Dict);
    e.uncertainty = Uncertainty.fromDict(d.uncertainty as Dict);
    e.unit = Ref.fromDict(d.unit as Dict);
    e.value = d.value as number;
    return e;
  }

  static fromJson(json: string | Dict): ImpactFactor | null {
    return typeof json === "string"
      ? ImpactFactor.fromDict(JSON.parse(json) as Dict)
      : ImpactFactor.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IImpactMethod {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  impactCategories?: Array<Ref> | null;
  lastChange?: string | null;
  name?: string | null;
  nwSets?: Array<NwSet> | null;
  source?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;
}

export class ImpactMethod {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  impactCategories?: Array<Ref> | null;
  lastChange?: string | null;
  name?: string | null;
  nwSets?: Array<NwSet> | null;
  source?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;

  static of(i: IImpactMethod): ImpactMethod {
    const e = new ImpactMethod();
    e.id = i.id;
    e.category = i.category;
    e.code = i.code;
    e.description = i.description;
    e.impactCategories = i.impactCategories;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.nwSets = i.nwSets;
    e.source = i.source;
    e.tags = i.tags;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.ImpactMethod,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "ImpactMethod";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.code, v => d.code = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.impactCategories, v => d.impactCategories = dictAll(v));
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.nwSets, v => d.nwSets = dictAll(v));
    ifPresent(this.source, v => d.source = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): ImpactMethod | null {
    if (!d) return null;
    const e = new ImpactMethod();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.code = d.code as string;
    e.description = d.description as string;
    e.impactCategories = d.impactCategories
      ? (d.impactCategories as Dict[]).map(Ref.fromDict) as Ref[]
      : null;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.nwSets = d.nwSets
      ? (d.nwSets as Dict[]).map(NwSet.fromDict) as NwSet[]
      : null;
    e.source = Ref.fromDict(d.source as Dict);
    e.tags = d.tags as string[];
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): ImpactMethod | null {
    return typeof json === "string"
      ? ImpactMethod.fromDict(JSON.parse(json) as Dict)
      : ImpactMethod.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IImpactResult {
  amount?: number | null;
  description?: string | null;
  indicator?: Ref | null;
}

export class ImpactResult {
  amount?: number | null;
  description?: string | null;
  indicator?: Ref | null;

  static of(i: IImpactResult): ImpactResult {
    const e = new ImpactResult();
    e.amount = i.amount;
    e.description = i.description;
    e.indicator = i.indicator;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.indicator, v => d.indicator = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): ImpactResult | null {
    if (!d) return null;
    const e = new ImpactResult();
    e.amount = d.amount as number;
    e.description = d.description as string;
    e.indicator = Ref.fromDict(d.indicator as Dict);
    return e;
  }

  static fromJson(json: string | Dict): ImpactResult | null {
    return typeof json === "string"
      ? ImpactResult.fromDict(JSON.parse(json) as Dict)
      : ImpactResult.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ILinkingConfig {
  cutoff?: number | null;
  preferUnitProcesses?: boolean | null;
  providerLinking?: ProviderLinking | null;
}

export class LinkingConfig {
  cutoff?: number | null;
  preferUnitProcesses?: boolean | null;
  providerLinking?: ProviderLinking | null;

  static of(i: ILinkingConfig): LinkingConfig {
    const e = new LinkingConfig();
    e.cutoff = i.cutoff;
    e.preferUnitProcesses = i.preferUnitProcesses;
    e.providerLinking = i.providerLinking;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.cutoff, v => d.cutoff = v);
    ifPresent(this.preferUnitProcesses, v => d.preferUnitProcesses = v);
    ifPresent(this.providerLinking, v => d.providerLinking = v);
    return d;
  }

  static fromDict(d: Dict): LinkingConfig | null {
    if (!d) return null;
    const e = new LinkingConfig();
    e.cutoff = d.cutoff as number;
    e.preferUnitProcesses = d.preferUnitProcesses as boolean;
    e.providerLinking = d.providerLinking as ProviderLinking;
    return e;
  }

  static fromJson(json: string | Dict): LinkingConfig | null {
    return typeof json === "string"
      ? LinkingConfig.fromDict(JSON.parse(json) as Dict)
      : LinkingConfig.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ILocation {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  geometry?: Record<string, unknown> | null;
  lastChange?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  tags?: Array<string> | null;
  version?: string | null;
}

export class Location {
  id?: string | null;
  category?: string | null;
  code?: string | null;
  description?: string | null;
  geometry?: Record<string, unknown> | null;
  lastChange?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  tags?: Array<string> | null;
  version?: string | null;

  static of(i: ILocation): Location {
    const e = new Location();
    e.id = i.id;
    e.category = i.category;
    e.code = i.code;
    e.description = i.description;
    e.geometry = i.geometry;
    e.lastChange = i.lastChange;
    e.latitude = i.latitude;
    e.longitude = i.longitude;
    e.name = i.name;
    e.tags = i.tags;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Location,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Location";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.code, v => d.code = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.geometry, v => d.geometry = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.latitude, v => d.latitude = v);
    ifPresent(this.longitude, v => d.longitude = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): Location | null {
    if (!d) return null;
    const e = new Location();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.code = d.code as string;
    e.description = d.description as string;
    e.geometry = d.geometry as Record<string, unknown>;
    e.lastChange = d.lastChange as string;
    e.latitude = d.latitude as number;
    e.longitude = d.longitude as number;
    e.name = d.name as string;
    e.tags = d.tags as string[];
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): Location | null {
    return typeof json === "string"
      ? Location.fromDict(JSON.parse(json) as Dict)
      : Location.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface INwFactor {
  impactCategory?: Ref | null;
  normalisationFactor?: number | null;
  weightingFactor?: number | null;
}

export class NwFactor {
  impactCategory?: Ref | null;
  normalisationFactor?: number | null;
  weightingFactor?: number | null;

  static of(i: INwFactor): NwFactor {
    const e = new NwFactor();
    e.impactCategory = i.impactCategory;
    e.normalisationFactor = i.normalisationFactor;
    e.weightingFactor = i.weightingFactor;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.impactCategory, v => d.impactCategory = v?.toDict());
    ifPresent(this.normalisationFactor, v => d.normalisationFactor = v);
    ifPresent(this.weightingFactor, v => d.weightingFactor = v);
    return d;
  }

  static fromDict(d: Dict): NwFactor | null {
    if (!d) return null;
    const e = new NwFactor();
    e.impactCategory = Ref.fromDict(d.impactCategory as Dict);
    e.normalisationFactor = d.normalisationFactor as number;
    e.weightingFactor = d.weightingFactor as number;
    return e;
  }

  static fromJson(json: string | Dict): NwFactor | null {
    return typeof json === "string"
      ? NwFactor.fromDict(JSON.parse(json) as Dict)
      : NwFactor.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface INwSet {
  id?: string | null;
  description?: string | null;
  factors?: Array<NwFactor> | null;
  name?: string | null;
  weightedScoreUnit?: string | null;
}

export class NwSet {
  id?: string | null;
  description?: string | null;
  factors?: Array<NwFactor> | null;
  name?: string | null;
  weightedScoreUnit?: string | null;

  static of(i: INwSet): NwSet {
    const e = new NwSet();
    e.id = i.id;
    e.description = i.description;
    e.factors = i.factors;
    e.name = i.name;
    e.weightedScoreUnit = i.weightedScoreUnit;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.NwSet,
      id: this.id,
      name: this.name,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "NwSet";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.factors, v => d.factors = dictAll(v));
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.weightedScoreUnit, v => d.weightedScoreUnit = v);
    return d;
  }

  static fromDict(d: Dict): NwSet | null {
    if (!d) return null;
    const e = new NwSet();
    e.id = d["@id"] as string;
    e.description = d.description as string;
    e.factors = d.factors
      ? (d.factors as Dict[]).map(NwFactor.fromDict) as NwFactor[]
      : null;
    e.name = d.name as string;
    e.weightedScoreUnit = d.weightedScoreUnit as string;
    return e;
  }

  static fromJson(json: string | Dict): NwSet | null {
    return typeof json === "string"
      ? NwSet.fromDict(JSON.parse(json) as Dict)
      : NwSet.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IParameter {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  formula?: string | null;
  isInputParameter?: boolean | null;
  lastChange?: string | null;
  name?: string | null;
  parameterScope?: ParameterScope | null;
  tags?: Array<string> | null;
  uncertainty?: Uncertainty | null;
  value?: number | null;
  version?: string | null;
}

export class Parameter {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  formula?: string | null;
  isInputParameter?: boolean | null;
  lastChange?: string | null;
  name?: string | null;
  parameterScope?: ParameterScope | null;
  tags?: Array<string> | null;
  uncertainty?: Uncertainty | null;
  value?: number | null;
  version?: string | null;

  static of(i: IParameter): Parameter {
    const e = new Parameter();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.formula = i.formula;
    e.isInputParameter = i.isInputParameter;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.parameterScope = i.parameterScope;
    e.tags = i.tags;
    e.uncertainty = i.uncertainty;
    e.value = i.value;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Parameter,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Parameter";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.formula, v => d.formula = v);
    ifPresent(this.isInputParameter, v => d.isInputParameter = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.parameterScope, v => d.parameterScope = v);
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.uncertainty, v => d.uncertainty = v?.toDict());
    ifPresent(this.value, v => d.value = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): Parameter | null {
    if (!d) return null;
    const e = new Parameter();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.formula = d.formula as string;
    e.isInputParameter = d.isInputParameter as boolean;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.parameterScope = d.parameterScope as ParameterScope;
    e.tags = d.tags as string[];
    e.uncertainty = Uncertainty.fromDict(d.uncertainty as Dict);
    e.value = d.value as number;
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): Parameter | null {
    return typeof json === "string"
      ? Parameter.fromDict(JSON.parse(json) as Dict)
      : Parameter.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IParameterRedef {
  context?: Ref | null;
  description?: string | null;
  isProtected?: boolean | null;
  name?: string | null;
  uncertainty?: Uncertainty | null;
  value?: number | null;
}

export class ParameterRedef {
  context?: Ref | null;
  description?: string | null;
  isProtected?: boolean | null;
  name?: string | null;
  uncertainty?: Uncertainty | null;
  value?: number | null;

  static of(i: IParameterRedef): ParameterRedef {
    const e = new ParameterRedef();
    e.context = i.context;
    e.description = i.description;
    e.isProtected = i.isProtected;
    e.name = i.name;
    e.uncertainty = i.uncertainty;
    e.value = i.value;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.context, v => d.context = v?.toDict());
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.isProtected, v => d.isProtected = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.uncertainty, v => d.uncertainty = v?.toDict());
    ifPresent(this.value, v => d.value = v);
    return d;
  }

  static fromDict(d: Dict): ParameterRedef | null {
    if (!d) return null;
    const e = new ParameterRedef();
    e.context = Ref.fromDict(d.context as Dict);
    e.description = d.description as string;
    e.isProtected = d.isProtected as boolean;
    e.name = d.name as string;
    e.uncertainty = Uncertainty.fromDict(d.uncertainty as Dict);
    e.value = d.value as number;
    return e;
  }

  static fromJson(json: string | Dict): ParameterRedef | null {
    return typeof json === "string"
      ? ParameterRedef.fromDict(JSON.parse(json) as Dict)
      : ParameterRedef.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IParameterRedefSet {
  description?: string | null;
  isBaseline?: boolean | null;
  name?: string | null;
  parameters?: Array<ParameterRedef> | null;
}

export class ParameterRedefSet {
  description?: string | null;
  isBaseline?: boolean | null;
  name?: string | null;
  parameters?: Array<ParameterRedef> | null;

  static of(i: IParameterRedefSet): ParameterRedefSet {
    const e = new ParameterRedefSet();
    e.description = i.description;
    e.isBaseline = i.isBaseline;
    e.name = i.name;
    e.parameters = i.parameters;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.isBaseline, v => d.isBaseline = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.parameters, v => d.parameters = dictAll(v));
    return d;
  }

  static fromDict(d: Dict): ParameterRedefSet | null {
    if (!d) return null;
    const e = new ParameterRedefSet();
    e.description = d.description as string;
    e.isBaseline = d.isBaseline as boolean;
    e.name = d.name as string;
    e.parameters = d.parameters
      ? (d.parameters as Dict[]).map(ParameterRedef.fromDict) as ParameterRedef[]
      : null;
    return e;
  }

  static fromJson(json: string | Dict): ParameterRedefSet | null {
    return typeof json === "string"
      ? ParameterRedefSet.fromDict(JSON.parse(json) as Dict)
      : ParameterRedefSet.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IProcess {
  id?: string | null;
  allocationFactors?: Array<AllocationFactor> | null;
  category?: string | null;
  defaultAllocationMethod?: AllocationType | null;
  description?: string | null;
  dqEntry?: string | null;
  dqSystem?: Ref | null;
  exchangeDqSystem?: Ref | null;
  exchanges?: Array<Exchange> | null;
  isInfrastructureProcess?: boolean | null;
  lastChange?: string | null;
  lastInternalId?: number | null;
  location?: Ref | null;
  name?: string | null;
  parameters?: Array<Parameter> | null;
  processDocumentation?: ProcessDocumentation | null;
  processType?: ProcessType | null;
  socialAspects?: Array<SocialAspect> | null;
  socialDqSystem?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;
}

export class Process {
  id?: string | null;
  allocationFactors?: Array<AllocationFactor> | null;
  category?: string | null;
  defaultAllocationMethod?: AllocationType | null;
  description?: string | null;
  dqEntry?: string | null;
  dqSystem?: Ref | null;
  exchangeDqSystem?: Ref | null;
  exchanges?: Array<Exchange> | null;
  isInfrastructureProcess?: boolean | null;
  lastChange?: string | null;
  lastInternalId?: number | null;
  location?: Ref | null;
  name?: string | null;
  parameters?: Array<Parameter> | null;
  processDocumentation?: ProcessDocumentation | null;
  processType?: ProcessType | null;
  socialAspects?: Array<SocialAspect> | null;
  socialDqSystem?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;

  static of(i: IProcess): Process {
    const e = new Process();
    e.id = i.id;
    e.allocationFactors = i.allocationFactors;
    e.category = i.category;
    e.defaultAllocationMethod = i.defaultAllocationMethod;
    e.description = i.description;
    e.dqEntry = i.dqEntry;
    e.dqSystem = i.dqSystem;
    e.exchangeDqSystem = i.exchangeDqSystem;
    e.exchanges = i.exchanges;
    e.isInfrastructureProcess = i.isInfrastructureProcess;
    e.lastChange = i.lastChange;
    e.lastInternalId = i.lastInternalId;
    e.location = i.location;
    e.name = i.name;
    e.parameters = i.parameters;
    e.processDocumentation = i.processDocumentation;
    e.processType = i.processType;
    e.socialAspects = i.socialAspects;
    e.socialDqSystem = i.socialDqSystem;
    e.tags = i.tags;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Process,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Process";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.allocationFactors, v => d.allocationFactors = dictAll(v));
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.defaultAllocationMethod, v => d.defaultAllocationMethod = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.dqEntry, v => d.dqEntry = v);
    ifPresent(this.dqSystem, v => d.dqSystem = v?.toDict());
    ifPresent(this.exchangeDqSystem, v => d.exchangeDqSystem = v?.toDict());
    ifPresent(this.exchanges, v => d.exchanges = dictAll(v));
    ifPresent(this.isInfrastructureProcess, v => d.isInfrastructureProcess = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.lastInternalId, v => d.lastInternalId = v);
    ifPresent(this.location, v => d.location = v?.toDict());
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.parameters, v => d.parameters = dictAll(v));
    ifPresent(this.processDocumentation, v => d.processDocumentation = v?.toDict());
    ifPresent(this.processType, v => d.processType = v);
    ifPresent(this.socialAspects, v => d.socialAspects = dictAll(v));
    ifPresent(this.socialDqSystem, v => d.socialDqSystem = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): Process | null {
    if (!d) return null;
    const e = new Process();
    e.id = d["@id"] as string;
    e.allocationFactors = d.allocationFactors
      ? (d.allocationFactors as Dict[]).map(AllocationFactor.fromDict) as AllocationFactor[]
      : null;
    e.category = d.category as string;
    e.defaultAllocationMethod = d.defaultAllocationMethod as AllocationType;
    e.description = d.description as string;
    e.dqEntry = d.dqEntry as string;
    e.dqSystem = Ref.fromDict(d.dqSystem as Dict);
    e.exchangeDqSystem = Ref.fromDict(d.exchangeDqSystem as Dict);
    e.exchanges = d.exchanges
      ? (d.exchanges as Dict[]).map(Exchange.fromDict) as Exchange[]
      : null;
    e.isInfrastructureProcess = d.isInfrastructureProcess as boolean;
    e.lastChange = d.lastChange as string;
    e.lastInternalId = d.lastInternalId as number;
    e.location = Ref.fromDict(d.location as Dict);
    e.name = d.name as string;
    e.parameters = d.parameters
      ? (d.parameters as Dict[]).map(Parameter.fromDict) as Parameter[]
      : null;
    e.processDocumentation = ProcessDocumentation.fromDict(d.processDocumentation as Dict);
    e.processType = d.processType as ProcessType;
    e.socialAspects = d.socialAspects
      ? (d.socialAspects as Dict[]).map(SocialAspect.fromDict) as SocialAspect[]
      : null;
    e.socialDqSystem = Ref.fromDict(d.socialDqSystem as Dict);
    e.tags = d.tags as string[];
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): Process | null {
    return typeof json === "string"
      ? Process.fromDict(JSON.parse(json) as Dict)
      : Process.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IProcessDocumentation {
  completenessDescription?: string | null;
  creationDate?: string | null;
  dataCollectionDescription?: string | null;
  dataDocumentor?: Ref | null;
  dataGenerator?: Ref | null;
  dataSelectionDescription?: string | null;
  dataSetOwner?: Ref | null;
  dataTreatmentDescription?: string | null;
  geographyDescription?: string | null;
  intendedApplication?: string | null;
  inventoryMethodDescription?: string | null;
  isCopyrightProtected?: boolean | null;
  modelingConstantsDescription?: string | null;
  projectDescription?: string | null;
  publication?: Ref | null;
  restrictionsDescription?: string | null;
  reviewDetails?: string | null;
  reviewer?: Ref | null;
  samplingDescription?: string | null;
  sources?: Array<Ref> | null;
  technologyDescription?: string | null;
  timeDescription?: string | null;
  validFrom?: string | null;
  validUntil?: string | null;
}

export class ProcessDocumentation {
  completenessDescription?: string | null;
  creationDate?: string | null;
  dataCollectionDescription?: string | null;
  dataDocumentor?: Ref | null;
  dataGenerator?: Ref | null;
  dataSelectionDescription?: string | null;
  dataSetOwner?: Ref | null;
  dataTreatmentDescription?: string | null;
  geographyDescription?: string | null;
  intendedApplication?: string | null;
  inventoryMethodDescription?: string | null;
  isCopyrightProtected?: boolean | null;
  modelingConstantsDescription?: string | null;
  projectDescription?: string | null;
  publication?: Ref | null;
  restrictionsDescription?: string | null;
  reviewDetails?: string | null;
  reviewer?: Ref | null;
  samplingDescription?: string | null;
  sources?: Array<Ref> | null;
  technologyDescription?: string | null;
  timeDescription?: string | null;
  validFrom?: string | null;
  validUntil?: string | null;

  static of(i: IProcessDocumentation): ProcessDocumentation {
    const e = new ProcessDocumentation();
    e.completenessDescription = i.completenessDescription;
    e.creationDate = i.creationDate;
    e.dataCollectionDescription = i.dataCollectionDescription;
    e.dataDocumentor = i.dataDocumentor;
    e.dataGenerator = i.dataGenerator;
    e.dataSelectionDescription = i.dataSelectionDescription;
    e.dataSetOwner = i.dataSetOwner;
    e.dataTreatmentDescription = i.dataTreatmentDescription;
    e.geographyDescription = i.geographyDescription;
    e.intendedApplication = i.intendedApplication;
    e.inventoryMethodDescription = i.inventoryMethodDescription;
    e.isCopyrightProtected = i.isCopyrightProtected;
    e.modelingConstantsDescription = i.modelingConstantsDescription;
    e.projectDescription = i.projectDescription;
    e.publication = i.publication;
    e.restrictionsDescription = i.restrictionsDescription;
    e.reviewDetails = i.reviewDetails;
    e.reviewer = i.reviewer;
    e.samplingDescription = i.samplingDescription;
    e.sources = i.sources;
    e.technologyDescription = i.technologyDescription;
    e.timeDescription = i.timeDescription;
    e.validFrom = i.validFrom;
    e.validUntil = i.validUntil;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.completenessDescription, v => d.completenessDescription = v);
    ifPresent(this.creationDate, v => d.creationDate = v);
    ifPresent(this.dataCollectionDescription, v => d.dataCollectionDescription = v);
    ifPresent(this.dataDocumentor, v => d.dataDocumentor = v?.toDict());
    ifPresent(this.dataGenerator, v => d.dataGenerator = v?.toDict());
    ifPresent(this.dataSelectionDescription, v => d.dataSelectionDescription = v);
    ifPresent(this.dataSetOwner, v => d.dataSetOwner = v?.toDict());
    ifPresent(this.dataTreatmentDescription, v => d.dataTreatmentDescription = v);
    ifPresent(this.geographyDescription, v => d.geographyDescription = v);
    ifPresent(this.intendedApplication, v => d.intendedApplication = v);
    ifPresent(this.inventoryMethodDescription, v => d.inventoryMethodDescription = v);
    ifPresent(this.isCopyrightProtected, v => d.isCopyrightProtected = v);
    ifPresent(this.modelingConstantsDescription, v => d.modelingConstantsDescription = v);
    ifPresent(this.projectDescription, v => d.projectDescription = v);
    ifPresent(this.publication, v => d.publication = v?.toDict());
    ifPresent(this.restrictionsDescription, v => d.restrictionsDescription = v);
    ifPresent(this.reviewDetails, v => d.reviewDetails = v);
    ifPresent(this.reviewer, v => d.reviewer = v?.toDict());
    ifPresent(this.samplingDescription, v => d.samplingDescription = v);
    ifPresent(this.sources, v => d.sources = dictAll(v));
    ifPresent(this.technologyDescription, v => d.technologyDescription = v);
    ifPresent(this.timeDescription, v => d.timeDescription = v);
    ifPresent(this.validFrom, v => d.validFrom = v);
    ifPresent(this.validUntil, v => d.validUntil = v);
    return d;
  }

  static fromDict(d: Dict): ProcessDocumentation | null {
    if (!d) return null;
    const e = new ProcessDocumentation();
    e.completenessDescription = d.completenessDescription as string;
    e.creationDate = d.creationDate as string;
    e.dataCollectionDescription = d.dataCollectionDescription as string;
    e.dataDocumentor = Ref.fromDict(d.dataDocumentor as Dict);
    e.dataGenerator = Ref.fromDict(d.dataGenerator as Dict);
    e.dataSelectionDescription = d.dataSelectionDescription as string;
    e.dataSetOwner = Ref.fromDict(d.dataSetOwner as Dict);
    e.dataTreatmentDescription = d.dataTreatmentDescription as string;
    e.geographyDescription = d.geographyDescription as string;
    e.intendedApplication = d.intendedApplication as string;
    e.inventoryMethodDescription = d.inventoryMethodDescription as string;
    e.isCopyrightProtected = d.isCopyrightProtected as boolean;
    e.modelingConstantsDescription = d.modelingConstantsDescription as string;
    e.projectDescription = d.projectDescription as string;
    e.publication = Ref.fromDict(d.publication as Dict);
    e.restrictionsDescription = d.restrictionsDescription as string;
    e.reviewDetails = d.reviewDetails as string;
    e.reviewer = Ref.fromDict(d.reviewer as Dict);
    e.samplingDescription = d.samplingDescription as string;
    e.sources = d.sources
      ? (d.sources as Dict[]).map(Ref.fromDict) as Ref[]
      : null;
    e.technologyDescription = d.technologyDescription as string;
    e.timeDescription = d.timeDescription as string;
    e.validFrom = d.validFrom as string;
    e.validUntil = d.validUntil as string;
    return e;
  }

  static fromJson(json: string | Dict): ProcessDocumentation | null {
    return typeof json === "string"
      ? ProcessDocumentation.fromDict(JSON.parse(json) as Dict)
      : ProcessDocumentation.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IProcessLink {
  exchange?: ExchangeRef | null;
  flow?: Ref | null;
  process?: Ref | null;
  provider?: Ref | null;
}

export class ProcessLink {
  exchange?: ExchangeRef | null;
  flow?: Ref | null;
  process?: Ref | null;
  provider?: Ref | null;

  static of(i: IProcessLink): ProcessLink {
    const e = new ProcessLink();
    e.exchange = i.exchange;
    e.flow = i.flow;
    e.process = i.process;
    e.provider = i.provider;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.exchange, v => d.exchange = v?.toDict());
    ifPresent(this.flow, v => d.flow = v?.toDict());
    ifPresent(this.process, v => d.process = v?.toDict());
    ifPresent(this.provider, v => d.provider = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): ProcessLink | null {
    if (!d) return null;
    const e = new ProcessLink();
    e.exchange = ExchangeRef.fromDict(d.exchange as Dict);
    e.flow = Ref.fromDict(d.flow as Dict);
    e.process = Ref.fromDict(d.process as Dict);
    e.provider = Ref.fromDict(d.provider as Dict);
    return e;
  }

  static fromJson(json: string | Dict): ProcessLink | null {
    return typeof json === "string"
      ? ProcessLink.fromDict(JSON.parse(json) as Dict)
      : ProcessLink.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IProductSystem {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  lastChange?: string | null;
  name?: string | null;
  parameterSets?: Array<ParameterRedefSet> | null;
  processLinks?: Array<ProcessLink> | null;
  processes?: Array<Ref> | null;
  refExchange?: ExchangeRef | null;
  refProcess?: Ref | null;
  tags?: Array<string> | null;
  targetAmount?: number | null;
  targetFlowProperty?: Ref | null;
  targetUnit?: Ref | null;
  version?: string | null;
}

export class ProductSystem {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  lastChange?: string | null;
  name?: string | null;
  parameterSets?: Array<ParameterRedefSet> | null;
  processLinks?: Array<ProcessLink> | null;
  processes?: Array<Ref> | null;
  refExchange?: ExchangeRef | null;
  refProcess?: Ref | null;
  tags?: Array<string> | null;
  targetAmount?: number | null;
  targetFlowProperty?: Ref | null;
  targetUnit?: Ref | null;
  version?: string | null;

  static of(i: IProductSystem): ProductSystem {
    const e = new ProductSystem();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.parameterSets = i.parameterSets;
    e.processLinks = i.processLinks;
    e.processes = i.processes;
    e.refExchange = i.refExchange;
    e.refProcess = i.refProcess;
    e.tags = i.tags;
    e.targetAmount = i.targetAmount;
    e.targetFlowProperty = i.targetFlowProperty;
    e.targetUnit = i.targetUnit;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.ProductSystem,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "ProductSystem";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.parameterSets, v => d.parameterSets = dictAll(v));
    ifPresent(this.processLinks, v => d.processLinks = dictAll(v));
    ifPresent(this.processes, v => d.processes = dictAll(v));
    ifPresent(this.refExchange, v => d.refExchange = v?.toDict());
    ifPresent(this.refProcess, v => d.refProcess = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.targetAmount, v => d.targetAmount = v);
    ifPresent(this.targetFlowProperty, v => d.targetFlowProperty = v?.toDict());
    ifPresent(this.targetUnit, v => d.targetUnit = v?.toDict());
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): ProductSystem | null {
    if (!d) return null;
    const e = new ProductSystem();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.parameterSets = d.parameterSets
      ? (d.parameterSets as Dict[]).map(ParameterRedefSet.fromDict) as ParameterRedefSet[]
      : null;
    e.processLinks = d.processLinks
      ? (d.processLinks as Dict[]).map(ProcessLink.fromDict) as ProcessLink[]
      : null;
    e.processes = d.processes
      ? (d.processes as Dict[]).map(Ref.fromDict) as Ref[]
      : null;
    e.refExchange = ExchangeRef.fromDict(d.refExchange as Dict);
    e.refProcess = Ref.fromDict(d.refProcess as Dict);
    e.tags = d.tags as string[];
    e.targetAmount = d.targetAmount as number;
    e.targetFlowProperty = Ref.fromDict(d.targetFlowProperty as Dict);
    e.targetUnit = Ref.fromDict(d.targetUnit as Dict);
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): ProductSystem | null {
    return typeof json === "string"
      ? ProductSystem.fromDict(JSON.parse(json) as Dict)
      : ProductSystem.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IProject {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  impactMethod?: Ref | null;
  isWithCosts?: boolean | null;
  isWithRegionalization?: boolean | null;
  lastChange?: string | null;
  name?: string | null;
  nwSet?: NwSet | null;
  tags?: Array<string> | null;
  variants?: Array<ProjectVariant> | null;
  version?: string | null;
}

export class Project {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  impactMethod?: Ref | null;
  isWithCosts?: boolean | null;
  isWithRegionalization?: boolean | null;
  lastChange?: string | null;
  name?: string | null;
  nwSet?: NwSet | null;
  tags?: Array<string> | null;
  variants?: Array<ProjectVariant> | null;
  version?: string | null;

  static of(i: IProject): Project {
    const e = new Project();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.impactMethod = i.impactMethod;
    e.isWithCosts = i.isWithCosts;
    e.isWithRegionalization = i.isWithRegionalization;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.nwSet = i.nwSet;
    e.tags = i.tags;
    e.variants = i.variants;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Project,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Project";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.impactMethod, v => d.impactMethod = v?.toDict());
    ifPresent(this.isWithCosts, v => d.isWithCosts = v);
    ifPresent(this.isWithRegionalization, v => d.isWithRegionalization = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.nwSet, v => d.nwSet = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.variants, v => d.variants = dictAll(v));
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): Project | null {
    if (!d) return null;
    const e = new Project();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.impactMethod = Ref.fromDict(d.impactMethod as Dict);
    e.isWithCosts = d.isWithCosts as boolean;
    e.isWithRegionalization = d.isWithRegionalization as boolean;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.nwSet = NwSet.fromDict(d.nwSet as Dict);
    e.tags = d.tags as string[];
    e.variants = d.variants
      ? (d.variants as Dict[]).map(ProjectVariant.fromDict) as ProjectVariant[]
      : null;
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): Project | null {
    return typeof json === "string"
      ? Project.fromDict(JSON.parse(json) as Dict)
      : Project.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IProjectVariant {
  allocationMethod?: AllocationType | null;
  amount?: number | null;
  description?: string | null;
  isDisabled?: boolean | null;
  name?: string | null;
  parameterRedefs?: Array<ParameterRedef> | null;
  productSystem?: Ref | null;
  unit?: Ref | null;
}

export class ProjectVariant {
  allocationMethod?: AllocationType | null;
  amount?: number | null;
  description?: string | null;
  isDisabled?: boolean | null;
  name?: string | null;
  parameterRedefs?: Array<ParameterRedef> | null;
  productSystem?: Ref | null;
  unit?: Ref | null;

  static of(i: IProjectVariant): ProjectVariant {
    const e = new ProjectVariant();
    e.allocationMethod = i.allocationMethod;
    e.amount = i.amount;
    e.description = i.description;
    e.isDisabled = i.isDisabled;
    e.name = i.name;
    e.parameterRedefs = i.parameterRedefs;
    e.productSystem = i.productSystem;
    e.unit = i.unit;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.allocationMethod, v => d.allocationMethod = v);
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.isDisabled, v => d.isDisabled = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.parameterRedefs, v => d.parameterRedefs = dictAll(v));
    ifPresent(this.productSystem, v => d.productSystem = v?.toDict());
    ifPresent(this.unit, v => d.unit = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): ProjectVariant | null {
    if (!d) return null;
    const e = new ProjectVariant();
    e.allocationMethod = d.allocationMethod as AllocationType;
    e.amount = d.amount as number;
    e.description = d.description as string;
    e.isDisabled = d.isDisabled as boolean;
    e.name = d.name as string;
    e.parameterRedefs = d.parameterRedefs
      ? (d.parameterRedefs as Dict[]).map(ParameterRedef.fromDict) as ParameterRedef[]
      : null;
    e.productSystem = Ref.fromDict(d.productSystem as Dict);
    e.unit = Ref.fromDict(d.unit as Dict);
    return e;
  }

  static fromJson(json: string | Dict): ProjectVariant | null {
    return typeof json === "string"
      ? ProjectVariant.fromDict(JSON.parse(json) as Dict)
      : ProjectVariant.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IRef {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  flowType?: FlowType | null;
  location?: string | null;
  name?: string | null;
  processType?: ProcessType | null;
  refUnit?: string | null;
  refType?: RefType | null;
}

export class Ref {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  flowType?: FlowType | null;
  location?: string | null;
  name?: string | null;
  processType?: ProcessType | null;
  refUnit?: string | null;
  refType?: RefType | null;

  static of(i: IRef): Ref {
    const e = new Ref();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.flowType = i.flowType;
    e.location = i.location;
    e.name = i.name;
    e.processType = i.processType;
    e.refUnit = i.refUnit;
    e.refType = i.refType;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.flowType, v => d.flowType = v);
    ifPresent(this.location, v => d.location = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.processType, v => d.processType = v);
    ifPresent(this.refUnit, v => d.refUnit = v);
    return d;
  }

  static fromDict(d: Dict): Ref | null {
    if (!d) return null;
    const e = new Ref();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.flowType = d.flowType as FlowType;
    e.location = d.location as string;
    e.name = d.name as string;
    e.processType = d.processType as ProcessType;
    e.refUnit = d.refUnit as string;
    return e;
  }

  static fromJson(json: string | Dict): Ref | null {
    return typeof json === "string"
      ? Ref.fromDict(JSON.parse(json) as Dict)
      : Ref.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IResult {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  flowResults?: Array<FlowResult> | null;
  impactMethod?: Ref | null;
  impactResults?: Array<ImpactResult> | null;
  lastChange?: string | null;
  name?: string | null;
  productSystem?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;
}

export class Result {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  flowResults?: Array<FlowResult> | null;
  impactMethod?: Ref | null;
  impactResults?: Array<ImpactResult> | null;
  lastChange?: string | null;
  name?: string | null;
  productSystem?: Ref | null;
  tags?: Array<string> | null;
  version?: string | null;

  static of(i: IResult): Result {
    const e = new Result();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.flowResults = i.flowResults;
    e.impactMethod = i.impactMethod;
    e.impactResults = i.impactResults;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.productSystem = i.productSystem;
    e.tags = i.tags;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Result,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Result";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.flowResults, v => d.flowResults = dictAll(v));
    ifPresent(this.impactMethod, v => d.impactMethod = v?.toDict());
    ifPresent(this.impactResults, v => d.impactResults = dictAll(v));
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.productSystem, v => d.productSystem = v?.toDict());
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): Result | null {
    if (!d) return null;
    const e = new Result();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.flowResults = d.flowResults
      ? (d.flowResults as Dict[]).map(FlowResult.fromDict) as FlowResult[]
      : null;
    e.impactMethod = Ref.fromDict(d.impactMethod as Dict);
    e.impactResults = d.impactResults
      ? (d.impactResults as Dict[]).map(ImpactResult.fromDict) as ImpactResult[]
      : null;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.productSystem = Ref.fromDict(d.productSystem as Dict);
    e.tags = d.tags as string[];
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): Result | null {
    return typeof json === "string"
      ? Result.fromDict(JSON.parse(json) as Dict)
      : Result.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ISocialAspect {
  activityValue?: number | null;
  comment?: string | null;
  quality?: string | null;
  rawAmount?: string | null;
  riskLevel?: RiskLevel | null;
  socialIndicator?: Ref | null;
  source?: Ref | null;
}

export class SocialAspect {
  activityValue?: number | null;
  comment?: string | null;
  quality?: string | null;
  rawAmount?: string | null;
  riskLevel?: RiskLevel | null;
  socialIndicator?: Ref | null;
  source?: Ref | null;

  static of(i: ISocialAspect): SocialAspect {
    const e = new SocialAspect();
    e.activityValue = i.activityValue;
    e.comment = i.comment;
    e.quality = i.quality;
    e.rawAmount = i.rawAmount;
    e.riskLevel = i.riskLevel;
    e.socialIndicator = i.socialIndicator;
    e.source = i.source;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.activityValue, v => d.activityValue = v);
    ifPresent(this.comment, v => d.comment = v);
    ifPresent(this.quality, v => d.quality = v);
    ifPresent(this.rawAmount, v => d.rawAmount = v);
    ifPresent(this.riskLevel, v => d.riskLevel = v);
    ifPresent(this.socialIndicator, v => d.socialIndicator = v?.toDict());
    ifPresent(this.source, v => d.source = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): SocialAspect | null {
    if (!d) return null;
    const e = new SocialAspect();
    e.activityValue = d.activityValue as number;
    e.comment = d.comment as string;
    e.quality = d.quality as string;
    e.rawAmount = d.rawAmount as string;
    e.riskLevel = d.riskLevel as RiskLevel;
    e.socialIndicator = Ref.fromDict(d.socialIndicator as Dict);
    e.source = Ref.fromDict(d.source as Dict);
    return e;
  }

  static fromJson(json: string | Dict): SocialAspect | null {
    return typeof json === "string"
      ? SocialAspect.fromDict(JSON.parse(json) as Dict)
      : SocialAspect.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ISocialIndicator {
  id?: string | null;
  activityQuantity?: Ref | null;
  activityUnit?: Ref | null;
  activityVariable?: string | null;
  category?: string | null;
  description?: string | null;
  evaluationScheme?: string | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  unitOfMeasurement?: string | null;
  version?: string | null;
}

export class SocialIndicator {
  id?: string | null;
  activityQuantity?: Ref | null;
  activityUnit?: Ref | null;
  activityVariable?: string | null;
  category?: string | null;
  description?: string | null;
  evaluationScheme?: string | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  unitOfMeasurement?: string | null;
  version?: string | null;

  static of(i: ISocialIndicator): SocialIndicator {
    const e = new SocialIndicator();
    e.id = i.id;
    e.activityQuantity = i.activityQuantity;
    e.activityUnit = i.activityUnit;
    e.activityVariable = i.activityVariable;
    e.category = i.category;
    e.description = i.description;
    e.evaluationScheme = i.evaluationScheme;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.tags = i.tags;
    e.unitOfMeasurement = i.unitOfMeasurement;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.SocialIndicator,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "SocialIndicator";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.activityQuantity, v => d.activityQuantity = v?.toDict());
    ifPresent(this.activityUnit, v => d.activityUnit = v?.toDict());
    ifPresent(this.activityVariable, v => d.activityVariable = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.evaluationScheme, v => d.evaluationScheme = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.unitOfMeasurement, v => d.unitOfMeasurement = v);
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): SocialIndicator | null {
    if (!d) return null;
    const e = new SocialIndicator();
    e.id = d["@id"] as string;
    e.activityQuantity = Ref.fromDict(d.activityQuantity as Dict);
    e.activityUnit = Ref.fromDict(d.activityUnit as Dict);
    e.activityVariable = d.activityVariable as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.evaluationScheme = d.evaluationScheme as string;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.tags = d.tags as string[];
    e.unitOfMeasurement = d.unitOfMeasurement as string;
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): SocialIndicator | null {
    return typeof json === "string"
      ? SocialIndicator.fromDict(JSON.parse(json) as Dict)
      : SocialIndicator.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ISource {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  externalFile?: string | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  textReference?: string | null;
  url?: string | null;
  version?: string | null;
  year?: number | null;
}

export class Source {
  id?: string | null;
  category?: string | null;
  description?: string | null;
  externalFile?: string | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  textReference?: string | null;
  url?: string | null;
  version?: string | null;
  year?: number | null;

  static of(i: ISource): Source {
    const e = new Source();
    e.id = i.id;
    e.category = i.category;
    e.description = i.description;
    e.externalFile = i.externalFile;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.tags = i.tags;
    e.textReference = i.textReference;
    e.url = i.url;
    e.version = i.version;
    e.year = i.year;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Source,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Source";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.externalFile, v => d.externalFile = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.textReference, v => d.textReference = v);
    ifPresent(this.url, v => d.url = v);
    ifPresent(this.version, v => d.version = v);
    ifPresent(this.year, v => d.year = v);
    return d;
  }

  static fromDict(d: Dict): Source | null {
    if (!d) return null;
    const e = new Source();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.description = d.description as string;
    e.externalFile = d.externalFile as string;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.tags = d.tags as string[];
    e.textReference = d.textReference as string;
    e.url = d.url as string;
    e.version = d.version as string;
    e.year = d.year as number;
    return e;
  }

  static fromJson(json: string | Dict): Source | null {
    return typeof json === "string"
      ? Source.fromDict(JSON.parse(json) as Dict)
      : Source.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IUncertainty {
  distributionType?: UncertaintyType | null;
  geomMean?: number | null;
  geomSd?: number | null;
  maximum?: number | null;
  mean?: number | null;
  minimum?: number | null;
  mode?: number | null;
  sd?: number | null;
}

export class Uncertainty {
  distributionType?: UncertaintyType | null;
  geomMean?: number | null;
  geomSd?: number | null;
  maximum?: number | null;
  mean?: number | null;
  minimum?: number | null;
  mode?: number | null;
  sd?: number | null;

  static of(i: IUncertainty): Uncertainty {
    const e = new Uncertainty();
    e.distributionType = i.distributionType;
    e.geomMean = i.geomMean;
    e.geomSd = i.geomSd;
    e.maximum = i.maximum;
    e.mean = i.mean;
    e.minimum = i.minimum;
    e.mode = i.mode;
    e.sd = i.sd;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.distributionType, v => d.distributionType = v);
    ifPresent(this.geomMean, v => d.geomMean = v);
    ifPresent(this.geomSd, v => d.geomSd = v);
    ifPresent(this.maximum, v => d.maximum = v);
    ifPresent(this.mean, v => d.mean = v);
    ifPresent(this.minimum, v => d.minimum = v);
    ifPresent(this.mode, v => d.mode = v);
    ifPresent(this.sd, v => d.sd = v);
    return d;
  }

  static fromDict(d: Dict): Uncertainty | null {
    if (!d) return null;
    const e = new Uncertainty();
    e.distributionType = d.distributionType as UncertaintyType;
    e.geomMean = d.geomMean as number;
    e.geomSd = d.geomSd as number;
    e.maximum = d.maximum as number;
    e.mean = d.mean as number;
    e.minimum = d.minimum as number;
    e.mode = d.mode as number;
    e.sd = d.sd as number;
    return e;
  }

  static fromJson(json: string | Dict): Uncertainty | null {
    return typeof json === "string"
      ? Uncertainty.fromDict(JSON.parse(json) as Dict)
      : Uncertainty.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IUnit {
  id?: string | null;
  conversionFactor?: number | null;
  description?: string | null;
  isRefUnit?: boolean | null;
  name?: string | null;
  synonyms?: Array<string> | null;
}

export class Unit {
  id?: string | null;
  conversionFactor?: number | null;
  description?: string | null;
  isRefUnit?: boolean | null;
  name?: string | null;
  synonyms?: Array<string> | null;

  static of(i: IUnit): Unit {
    const e = new Unit();
    e.id = i.id;
    e.conversionFactor = i.conversionFactor;
    e.description = i.description;
    e.isRefUnit = i.isRefUnit;
    e.name = i.name;
    e.synonyms = i.synonyms;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.Unit,
      id: this.id,
      name: this.name,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "Unit";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.conversionFactor, v => d.conversionFactor = v);
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.isRefUnit, v => d.isRefUnit = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.synonyms, v => d.synonyms = v);
    return d;
  }

  static fromDict(d: Dict): Unit | null {
    if (!d) return null;
    const e = new Unit();
    e.id = d["@id"] as string;
    e.conversionFactor = d.conversionFactor as number;
    e.description = d.description as string;
    e.isRefUnit = d.isRefUnit as boolean;
    e.name = d.name as string;
    e.synonyms = d.synonyms as string[];
    return e;
  }

  static fromJson(json: string | Dict): Unit | null {
    return typeof json === "string"
      ? Unit.fromDict(JSON.parse(json) as Dict)
      : Unit.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IUnitGroup {
  id?: string | null;
  category?: string | null;
  defaultFlowProperty?: Ref | null;
  description?: string | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  units?: Array<Unit> | null;
  version?: string | null;
}

export class UnitGroup {
  id?: string | null;
  category?: string | null;
  defaultFlowProperty?: Ref | null;
  description?: string | null;
  lastChange?: string | null;
  name?: string | null;
  tags?: Array<string> | null;
  units?: Array<Unit> | null;
  version?: string | null;

  static of(i: IUnitGroup): UnitGroup {
    const e = new UnitGroup();
    e.id = i.id;
    e.category = i.category;
    e.defaultFlowProperty = i.defaultFlowProperty;
    e.description = i.description;
    e.lastChange = i.lastChange;
    e.name = i.name;
    e.tags = i.tags;
    e.units = i.units;
    e.version = i.version;
    return e;
  }

  toRef(): Ref {
    return Ref.of({
      refType: RefType.UnitGroup,
      id: this.id,
      name: this.name,
      category: this.category,
    });
  }

  toDict(): Dict {
    const d: Dict = {};
    d["@type"] = "UnitGroup";
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.category, v => d.category = v);
    ifPresent(this.defaultFlowProperty, v => d.defaultFlowProperty = v?.toDict());
    ifPresent(this.description, v => d.description = v);
    ifPresent(this.lastChange, v => d.lastChange = v);
    ifPresent(this.name, v => d.name = v);
    ifPresent(this.tags, v => d.tags = v);
    ifPresent(this.units, v => d.units = dictAll(v));
    ifPresent(this.version, v => d.version = v);
    return d;
  }

  static fromDict(d: Dict): UnitGroup | null {
    if (!d) return null;
    const e = new UnitGroup();
    e.id = d["@id"] as string;
    e.category = d.category as string;
    e.defaultFlowProperty = Ref.fromDict(d.defaultFlowProperty as Dict);
    e.description = d.description as string;
    e.lastChange = d.lastChange as string;
    e.name = d.name as string;
    e.tags = d.tags as string[];
    e.units = d.units
      ? (d.units as Dict[]).map(Unit.fromDict) as Unit[]
      : null;
    e.version = d.version as string;
    return e;
  }

  static fromJson(json: string | Dict): UnitGroup | null {
    return typeof json === "string"
      ? UnitGroup.fromDict(JSON.parse(json) as Dict)
      : UnitGroup.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ICalculationSetup {
  allocation?: AllocationType | null;
  amount?: number | null;
  flowProperty?: Ref | null;
  impactMethod?: Ref | null;
  nwSet?: Ref | null;
  parameters?: Array<ParameterRedef> | null;
  target?: Ref | null;
  unit?: Ref | null;
  withCosts?: boolean | null;
  withRegionalization?: boolean | null;
}

export class CalculationSetup {
  allocation?: AllocationType | null;
  amount?: number | null;
  flowProperty?: Ref | null;
  impactMethod?: Ref | null;
  nwSet?: Ref | null;
  parameters?: Array<ParameterRedef> | null;
  target?: Ref | null;
  unit?: Ref | null;
  withCosts?: boolean | null;
  withRegionalization?: boolean | null;

  static of(i: ICalculationSetup): CalculationSetup {
    const e = new CalculationSetup();
    e.allocation = i.allocation;
    e.amount = i.amount;
    e.flowProperty = i.flowProperty;
    e.impactMethod = i.impactMethod;
    e.nwSet = i.nwSet;
    e.parameters = i.parameters;
    e.target = i.target;
    e.unit = i.unit;
    e.withCosts = i.withCosts;
    e.withRegionalization = i.withRegionalization;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.allocation, v => d.allocation = v);
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.flowProperty, v => d.flowProperty = v?.toDict());
    ifPresent(this.impactMethod, v => d.impactMethod = v?.toDict());
    ifPresent(this.nwSet, v => d.nwSet = v?.toDict());
    ifPresent(this.parameters, v => d.parameters = dictAll(v));
    ifPresent(this.target, v => d.target = v?.toDict());
    ifPresent(this.unit, v => d.unit = v?.toDict());
    ifPresent(this.withCosts, v => d.withCosts = v);
    ifPresent(this.withRegionalization, v => d.withRegionalization = v);
    return d;
  }

  static fromDict(d: Dict): CalculationSetup | null {
    if (!d) return null;
    const e = new CalculationSetup();
    e.allocation = d.allocation as AllocationType;
    e.amount = d.amount as number;
    e.flowProperty = Ref.fromDict(d.flowProperty as Dict);
    e.impactMethod = Ref.fromDict(d.impactMethod as Dict);
    e.nwSet = Ref.fromDict(d.nwSet as Dict);
    e.parameters = d.parameters
      ? (d.parameters as Dict[]).map(ParameterRedef.fromDict) as ParameterRedef[]
      : null;
    e.target = Ref.fromDict(d.target as Dict);
    e.unit = Ref.fromDict(d.unit as Dict);
    e.withCosts = d.withCosts as boolean;
    e.withRegionalization = d.withRegionalization as boolean;
    return e;
  }

  static fromJson(json: string | Dict): CalculationSetup | null {
    return typeof json === "string"
      ? CalculationSetup.fromDict(JSON.parse(json) as Dict)
      : CalculationSetup.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ICostValue {
  amount?: number | null;
  currency?: Ref | null;
}

export class CostValue {
  amount?: number | null;
  currency?: Ref | null;

  static of(i: ICostValue): CostValue {
    const e = new CostValue();
    e.amount = i.amount;
    e.currency = i.currency;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.currency, v => d.currency = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): CostValue | null {
    if (!d) return null;
    const e = new CostValue();
    e.amount = d.amount as number;
    e.currency = Ref.fromDict(d.currency as Dict);
    return e;
  }

  static fromJson(json: string | Dict): CostValue | null {
    return typeof json === "string"
      ? CostValue.fromDict(JSON.parse(json) as Dict)
      : CostValue.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IEnviFlow {
  flow?: Ref | null;
  isInput?: boolean | null;
  location?: Ref | null;
}

export class EnviFlow {
  flow?: Ref | null;
  isInput?: boolean | null;
  location?: Ref | null;

  static of(i: IEnviFlow): EnviFlow {
    const e = new EnviFlow();
    e.flow = i.flow;
    e.isInput = i.isInput;
    e.location = i.location;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.flow, v => d.flow = v?.toDict());
    ifPresent(this.isInput, v => d.isInput = v);
    ifPresent(this.location, v => d.location = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): EnviFlow | null {
    if (!d) return null;
    const e = new EnviFlow();
    e.flow = Ref.fromDict(d.flow as Dict);
    e.isInput = d.isInput as boolean;
    e.location = Ref.fromDict(d.location as Dict);
    return e;
  }

  static fromJson(json: string | Dict): EnviFlow | null {
    return typeof json === "string"
      ? EnviFlow.fromDict(JSON.parse(json) as Dict)
      : EnviFlow.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IEnviFlowValue {
  amount?: number | null;
  enviFlow?: EnviFlow | null;
}

export class EnviFlowValue {
  amount?: number | null;
  enviFlow?: EnviFlow | null;

  static of(i: IEnviFlowValue): EnviFlowValue {
    const e = new EnviFlowValue();
    e.amount = i.amount;
    e.enviFlow = i.enviFlow;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.enviFlow, v => d.enviFlow = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): EnviFlowValue | null {
    if (!d) return null;
    const e = new EnviFlowValue();
    e.amount = d.amount as number;
    e.enviFlow = EnviFlow.fromDict(d.enviFlow as Dict);
    return e;
  }

  static fromJson(json: string | Dict): EnviFlowValue | null {
    return typeof json === "string"
      ? EnviFlowValue.fromDict(JSON.parse(json) as Dict)
      : EnviFlowValue.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IImpactValue {
  amount?: number | null;
  impactCategory?: Ref | null;
}

export class ImpactValue {
  amount?: number | null;
  impactCategory?: Ref | null;

  static of(i: IImpactValue): ImpactValue {
    const e = new ImpactValue();
    e.amount = i.amount;
    e.impactCategory = i.impactCategory;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.impactCategory, v => d.impactCategory = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): ImpactValue | null {
    if (!d) return null;
    const e = new ImpactValue();
    e.amount = d.amount as number;
    e.impactCategory = Ref.fromDict(d.impactCategory as Dict);
    return e;
  }

  static fromJson(json: string | Dict): ImpactValue | null {
    return typeof json === "string"
      ? ImpactValue.fromDict(JSON.parse(json) as Dict)
      : ImpactValue.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface IResultState {
  id?: string | null;
  error?: string | null;
  isReady?: boolean | null;
  isScheduled?: boolean | null;
  time?: number | null;
}

export class ResultState {
  id?: string | null;
  error?: string | null;
  isReady?: boolean | null;
  isScheduled?: boolean | null;
  time?: number | null;

  static of(i: IResultState): ResultState {
    const e = new ResultState();
    e.id = i.id;
    e.error = i.error;
    e.isReady = i.isReady;
    e.isScheduled = i.isScheduled;
    e.time = i.time;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.id, v => d["@id"] = v);
    ifPresent(this.error, v => d.error = v);
    ifPresent(this.isReady, v => d.isReady = v);
    ifPresent(this.isScheduled, v => d.isScheduled = v);
    ifPresent(this.time, v => d.time = v);
    return d;
  }

  static fromDict(d: Dict): ResultState | null {
    if (!d) return null;
    const e = new ResultState();
    e.id = d["@id"] as string;
    e.error = d.error as string;
    e.isReady = d.isReady as boolean;
    e.isScheduled = d.isScheduled as boolean;
    e.time = d.time as number;
    return e;
  }

  static fromJson(json: string | Dict): ResultState | null {
    return typeof json === "string"
      ? ResultState.fromDict(JSON.parse(json) as Dict)
      : ResultState.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ITechFlow {
  flow?: Ref | null;
  provider?: Ref | null;
}

export class TechFlow {
  flow?: Ref | null;
  provider?: Ref | null;

  static of(i: ITechFlow): TechFlow {
    const e = new TechFlow();
    e.flow = i.flow;
    e.provider = i.provider;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.flow, v => d.flow = v?.toDict());
    ifPresent(this.provider, v => d.provider = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): TechFlow | null {
    if (!d) return null;
    const e = new TechFlow();
    e.flow = Ref.fromDict(d.flow as Dict);
    e.provider = Ref.fromDict(d.provider as Dict);
    return e;
  }

  static fromJson(json: string | Dict): TechFlow | null {
    return typeof json === "string"
      ? TechFlow.fromDict(JSON.parse(json) as Dict)
      : TechFlow.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

interface ITechFlowValue {
  amount?: number | null;
  techFlow?: TechFlow | null;
}

export class TechFlowValue {
  amount?: number | null;
  techFlow?: TechFlow | null;

  static of(i: ITechFlowValue): TechFlowValue {
    const e = new TechFlowValue();
    e.amount = i.amount;
    e.techFlow = i.techFlow;
    return e;
  }

  toDict(): Dict {
    const d: Dict = {};
    ifPresent(this.amount, v => d.amount = v);
    ifPresent(this.techFlow, v => d.techFlow = v?.toDict());
    return d;
  }

  static fromDict(d: Dict): TechFlowValue | null {
    if (!d) return null;
    const e = new TechFlowValue();
    e.amount = d.amount as number;
    e.techFlow = TechFlow.fromDict(d.techFlow as Dict);
    return e;
  }

  static fromJson(json: string | Dict): TechFlowValue | null {
    return typeof json === "string"
      ? TechFlowValue.fromDict(JSON.parse(json) as Dict)
      : TechFlowValue.fromDict(json);
  }

  toJson(): string {
    return JSON.stringify(this.toDict(), null, "  ");
  }

}

