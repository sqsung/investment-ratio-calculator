import { Divider } from "@/components/common";
import { InvestmentInput } from "@/components/investment";

export default function Home() {
  return (
    <div className="debug-border h-screen p-10 flex flex-col gap-5">
      <h1>Investment Portfolio Calculator</h1>
      <div className="debug-border h-full flex flex-col justify-between">
        <InvestmentInput mainLabel="미국 주식 (UH)" subLabel="(KODEX 미국 S&P500TR)" />
        <InvestmentInput mainLabel="한국 주식" subLabel="(KOSEF 200TR)" />
        <InvestmentInput mainLabel="중국 주식" subLabel="(KODEX 차이나 CSI300)" />
        <InvestmentInput mainLabel="인도 (UH)" subLabel="(KODEX 인도 Nifty50)" />
        <InvestmentInput mainLabel="금 (UH)" subLabel="(ACE KRX 금현물)" />
        <InvestmentInput mainLabel="미국채 10년 (UH)" subLabel="KODEX 미국채 10년 선물)" />
        <InvestmentInput mainLabel="미국채 30년 (H)" subLabel="(ACE 미국 30년 국채액티브(H))" />
        <InvestmentInput mainLabel="국고채 30년" subLabel="KBSTAR KIS 국고채 30년 Enhanced" />
        <InvestmentInput mainLabel="현금성자산" subLabel="(TIGER KOFR 금리액티브(합성))" />
        <InvestmentInput mainLabel="예수금" />
      </div>
    </div>
  );
}
