import { CalculatedInvestments, Investment, InvestmentValueType, Investments } from "@/types/global";
import { ROWS } from "@/utils/constants";
import { getRequiredChange } from "@/utils/format";
import { useState } from "react";

export default function useHome() {
  const [total, setTotal] = useState(0);
  // const [isApplied, setIsApplied] = useState(false);

  const [investments, setInvestments] = useState<Investments>({
    us: { has: 0, price: 0 },
    kr: { has: 0, price: 0 },
    cn: { has: 0, price: 0 },
    in: { has: 0, price: 0 },
    gold: { has: 0, price: 0 },
    usBond30: { has: 0, price: 0 },
    usBond10: { has: 0, price: 0 },
    krBond: { has: 0, price: 0 },
    liquid: { has: 0, price: 0 },
    deposit: { has: 1, price: 0 },
  });

  // const [calculatedInvestments, setCalculatedInvestments] = useState<CalculatedInvestments>({
  //   us: { growth: 0, safe: 0 },
  //   kr: { growth: 0, safe: 0 },
  //   cn: { growth: 0, safe: 0 },
  //   in: { growth: 0, safe: 0 },
  //   gold: { growth: 0, safe: 0 },
  //   usBond30: { growth: 0, safe: 0 },
  //   usBond10: { growth: 0, safe: 0 },
  //   krBond: { growth: 0, safe: 0 },
  //   liquid: { growth: 0, safe: 0 },
  //   deposit: { growth: 1, safe: 1 },
  // });

  const onInvestmentValueChange = (event: React.ChangeEvent, key: keyof Investments, type: InvestmentValueType) => {
    const input = event.target as HTMLInputElement;
    setInvestments(prev => ({ ...prev, [key]: { ...prev[key], [type]: +input.value } }));
  };

  const onCalculate = () => {
    const overallAsset: number = Object.values(investments).reduce((acc, cur) => acc + cur.has * cur.price, 0);

    setTotal(overallAsset);
    // setIsApplied(false);

    // setCalculatedInvestments(() => {
    //   const newState: CalculatedInvestments = {
    //     us: { growth: 0, safe: 0 },
    //     kr: { growth: 0, safe: 0 },
    //     cn: { growth: 0, safe: 0 },
    //     in: { growth: 0, safe: 0 },
    //     gold: { growth: 0, safe: 0 },
    //     usBond30: { growth: 0, safe: 0 },
    //     usBond10: { growth: 0, safe: 0 },
    //     krBond: { growth: 0, safe: 0 },
    //     liquid: { growth: 0, safe: 0 },
    //     deposit: { growth: 1, safe: 1 },
    //   };

    //   ROWS.forEach(row => {
    //     const key = row.key;
    //     const common = { total, price: +investments[key].price, has: +investments[key].has };

    //     newState[key] = {
    //       growth: getRequiredChange({
    //         ...common,
    //         targetRatio: row.growth,
    //       }),
    //       safe: getRequiredChange({
    //         ...common,
    //         targetRatio: row.safe,
    //       }),
    //     };
    //   });

    //   return newState;
    // });
  };

  // const onApply = (type: "safe" | "growth") => {
  //   setIsApplied(prev => !prev);

  //   setInvestments(prev => {
  //     const keys = Object.keys(prev);

  //     const newInvestments: Investments = {
  //       us: { has: 0, price: 0 },
  //       kr: { has: 0, price: 0 },
  //       cn: { has: 0, price: 0 },
  //       in: { has: 0, price: 0 },
  //       gold: { has: 0, price: 0 },
  //       usBond30: { has: 0, price: 0 },
  //       usBond10: { has: 0, price: 0 },
  //       krBond: { has: 0, price: 0 },
  //       liquid: { has: 0, price: 0 },
  //       deposit: { has: 1, price: 0 },
  //     };

  //     keys.forEach(key => {
  //       const newHas = +calculatedInvestments[key as keyof CalculatedInvestments][type];
  //       newInvestments[key as keyof Investments] = { ...prev[key as keyof Investments], has: newHas };
  //     });

  //     return newInvestments;
  //   });
  // };

  const autoTotal: number = Object.values(investments).reduce((acc, cur) => acc + cur.has * cur.price, 0);

  return {
    models: { investments, total, autoTotal },
    operations: { onInvestmentValueChange, onCalculate },
  };
}
