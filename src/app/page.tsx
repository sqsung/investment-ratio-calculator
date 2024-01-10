"use client";

import { InvestmentInput } from "@/components/investment";
import { ROWS } from "@/utils/constants";
import useHome from "./home.hook";
import { getRequiredChange } from "@/utils/format";
import { TableHeader, Button, SideLabels } from "@/components/common";

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
              const growthChange = getRequiredChange({
                total,
                price: +value.price,
                has: +value.has,
                targetRatio: row.growth!,
              });
              const safeChange = getRequiredChange({
                total,
                price: +value.price,
                has: +value.has,
                targetRatio: row.safe!,
              });

              return (
                <div key={index} className="flex w-full justify-around">
                  <InvestmentInput
                    row={row}
                    total={total}
                    autoTotal={autoTotal}
                    value={value}
                    onChange={onInvestmentValueChange}
                  />
                  <div className="flex w-full">
                    <p className="flex justify-center w-full italic text-gray-500 font-light text-2xl">
                      {(row.growth * 100).toFixed(0) + "%"}
                    </p>
                    <div className="w-full">
                      <p className="text-center font-bold text-2xl text-gray-700">
                        {!growthChange ? "" : `${growthChange.targetQuantity}`}
                      </p>
                      <p className="text-center text-base text-gray-700">
                        {!growthChange ? (
                          "-"
                        ) : (
                          <span className={`font-bold ${growthChange.needsMore ? "text-blue-500" : "text-red-500"}`}>
                            {growthChange.changeQuantity}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p className="flex justify-center w-full italic text-gray-500 font-light text-2xl">
                      {(row.safe * 100).toFixed(0) + "%"}
                    </p>
                    <div className="w-full">
                      <p className="text-center font-bold text-2xl text-gray-700">
                        {!safeChange ? "-" : `${safeChange.targetQuantity}`}
                      </p>
                      <p className="text-center text-base text-gray-700">
                        {!safeChange ? (
                          "-"
                        ) : (
                          <span className={`font-bold ${safeChange.needsMore ? "text-blue-500" : "text-red-500"}`}>
                            {safeChange.changeQuantity}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-50 pl-[80px] h-[40px] border-t border-gray-300 grid grid-cols-[2fr,1fr,1fr,1fr,1fr] text font-bold text-gray-500">
          <p className="w-full h-full flex justify-center items-center">합계</p>
          <p className="w-full h-full flex justify-center items-center text-secondary font-bold">
            {autoTotal.toLocaleString() || 0}원
          </p>
        </div>
      </div>
    </div>
  );
}
