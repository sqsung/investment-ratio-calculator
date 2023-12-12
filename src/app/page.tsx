"use client";

import { InvestmentInput } from "@/components/investment";
import { ROWS } from "@/utils/constants";
import useHome from "./home.hook";
import Button from "@/components/common/Button";
import { getRequiredChange } from "@/utils/format";

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
        <div className="flex h-[50px] w-full bg-primary text-gray-100 font-bold">
          <p className="w-[80px] h-full flex justify-center items-center">구분</p>
          <div className="flex w-full justify-between">
            <p className="w-full h-full flex justify-center items-center">자산군</p>
            <p className="w-full h-full flex justify-center items-center">현재 가격</p>
            <p className="w-full h-full flex justify-center items-center">보유 개수</p>
            <p className="w-full h-full flex justify-center items-center">현재 비율</p>
            <p className="w-full h-full flex gap-3 justify-center items-center">
              성장형
              <span>
                (<span>4.2</span>
                <i className="bi bi-caret-up-fill text-red-400" />)
              </span>
            </p>
            <p className="w-full h-full flex gap-3 justify-center items-center">
              안정형
              <span>
                (<span>2.4</span>
                <i className="bi bi-caret-down-fill text-blue-400" />)
              </span>
            </p>
          </div>
        </div>
        <div className="h-full flex">
          <div className="grid grid-rows-[4fr,1fr,3fr,2fr] w-[80px] h-full text-sm text-gray-500 font-bold">
            <p className="h-full flex justify-center items-center border-r border-b border-gray-300">주식</p>
            <p className="h-full flex justify-center items-center border-r border-b border-gray-300">대체투자</p>
            <p className="h-full flex justify-center items-center border-r border-b border-gray-300">국채</p>
            <p className="h-full flex justify-center items-center border-r border-gray-300">현금성자산</p>
          </div>
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
                  <p className="w-full text-center font-bold text-lg text-gray-700">
                    {getRequiredChange({ total, price: +value.price, has: +value.has, targetRatio: row.growth! })}
                  </p>
                  <p className="w-full text-center font-bold text-lg text-gray-700">
                    {getRequiredChange({ total, price: +value.price, has: +value.has, targetRatio: row.safe! })}
                  </p>
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
          <p className="w-full h-full flex justify-center items-center">-</p>
          <p className="w-full h-full flex justify-center items-center">-</p>
          <p className="w-full h-full flex justify-center items-center">-</p>
        </div>
      </div>
    </div>
  );
}
