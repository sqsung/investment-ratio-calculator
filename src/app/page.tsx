import { Divider } from "@/components/common";
import { InvestmentInput } from "@/components/investment";

export default function Home() {
  return (
    <div className="h-screen p-10 flex flex-col gap-5">
      <h1 className="font-bold text-gray-700 text-2xl">투자 포트폴리오 계산기</h1>
      <div className="h-full flex flex-col border rounded-md border-gray-300">
        <div className="rounded-t-md flex h-[50px] w-full bg-primary text-white font-bold">
          <p className="w-[80px] h-full flex justify-center items-center">구분</p>
          <div className="flex w-full justify-between">
            <p className="w-full h-full flex justify-center items-center">자산군</p>
            <p className="w-full h-full flex justify-center items-center">현재 가격</p>
            <p className="w-full h-full flex justify-center items-center">보유 개수</p>
            <p className="w-full h-full flex justify-center items-center">현재 비율</p>
            <p className="w-full h-full flex justify-center items-center">성장형</p>
            <p className="w-full h-full flex justify-center items-center">안전형</p>
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
            <InvestmentInput mainLabel="미국 주식 (UH)" subLabel="(KODEX 미국 S&P500TR)" />
            <InvestmentInput mainLabel="한국 주식" subLabel="(KOSEF 200TR)" />
            <InvestmentInput mainLabel="중국 주식" subLabel="(KODEX 차이나 CSI300)" />
            <InvestmentInput mainLabel="인도 (UH)" subLabel="(KODEX 인도 Nifty50)" />
            <InvestmentInput mainLabel="금 (UH)" subLabel="(ACE KRX 금현물)" />
            <InvestmentInput mainLabel="미국채 10년 (UH)" subLabel="KODEX 미국채 10년 선물)" />
            <InvestmentInput mainLabel="미국채 30년 (H)" subLabel="(ACE 미국 30년 국채액티브(H))" />
            <InvestmentInput mainLabel="국고채 30년" subLabel="KBSTAR KIS 국고채 30년 Enhanced" />
            <InvestmentInput mainLabel="현금성자산" subLabel="(TIGER KOFR 금리액티브(합성))" />
            <InvestmentInput mainLabel="예수금" subLabel="(총액에는 합계되지 않음 *)" />
          </div>
        </div>
        <div className="pl-[90px] h-[50px] border-t border-gray-300 grid grid-cols-[2fr,1fr,1fr,1fr,1fr] text-lg font-bold text-gray-500">
          <p className="w-full h-full flex justify-center items-center">합 계</p>
          <p className="w-full h-full flex justify-center items-center">1020</p>
          <p className="w-full h-full flex justify-center items-center">100.0%</p>
          <p className="w-full h-full flex justify-center items-center">100.0%</p>
          <p className="w-full h-full flex justify-center items-center">100.0%</p>
        </div>
      </div>
    </div>
  );
}
