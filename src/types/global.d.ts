export interface Investment {
  has: number | string;
  price: number | string;
}

export interface CalculatedInvestment {
  safe: number | string;
  growth: number | string;
}

export interface Investments {
  us: Investment;
  kr: Investment;
  cn: Investment;
  in: Investment;
  gold: Investment;
  usBond30: Investment;
  usBond10: Investment;
  krBond: Investment;
  liquid: Investment;
  deposit: Investment;
}

export interface CalculatedInvestments {
  us: CalculatedInvestment;
  kr: CalculatedInvestment;
  cn: CalculatedInvestment;
  in: CalculatedInvestment;
  gold: CalculatedInvestment;
  usBond30: CalculatedInvestment;
  usBond10: CalculatedInvestment;
  krBond: CalculatedInvestment;
  liquid: CalculatedInvestment;
  deposit: CalculatedInvestment;
}

export type InvestmentValueType = "has" | "price";

export interface Row {
  mainLabel: string;
  subLabel: string;
  key: keyof Investments;
  growth: number;
  safe: number;
}
