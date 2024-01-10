"use client";

import useHome from "./home.hook";
import { ROWS } from "@/utils/constants";
import { InvestmentInput, Recommendation } from "@/components/investment";
import { TableHeader, Button, SideLabels, Total } from "@/components/common";

export default function Home() {
  const {
    models: { investments, total, autoTotal },
    operations: { onInvestmentValueChange, onCalculate },
  } = useHome();

  return (
    <div className="h-screen min-w-[1600px] p-10 flex flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-primary text-2xl">투자 포트폴리오 계산기</h1>
        <Button text="계산하기" onClick={onCalculate} />
      </div>
      <div className="h-full flex flex-col rounded-md border border-primary overflow-hidden">
        <TableHeader />
        <div className="h-full flex">
          <SideLabels />
          <div className="w-full flex flex-col h-full justify-around">
            {ROWS.map((row, index) => {
              const value = investments[row.key];

              return (
                <div key={index} className="flex w-full justify-around">
                  <InvestmentInput
                    row={row}
                    total={total}
                    autoTotal={autoTotal}
                    value={value}
                    onChange={onInvestmentValueChange}
                  />
                  <Recommendation
                    targetRatio={row.growth}
                    total={total}
                    price={+value.price}
                    has={+value.has}
                    isDeposit={!!(row.mainLabel === "예수금")}
                  />
                  <Recommendation
                    targetRatio={row.safe}
                    total={total}
                    price={+value.price}
                    has={+value.has}
                    isDeposit={!!(row.mainLabel === "예수금")}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Total autoTotal={autoTotal} />
      </div>
    </div>
  );
}
