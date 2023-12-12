import { Investments, Investment, InvestmentValueType, Row } from "@/types/global";
import { getPercentage } from "@/utils/format";

interface InvestmentInputProps {
  row: Row;
  value: Investment;
  total: number;
  autoTotal: number;
  onChange: (event: React.ChangeEvent, key: keyof Investments, type: InvestmentValueType) => void;
}

export default function InvestmentInput({ row, value, total, onChange, autoTotal }: InvestmentInputProps) {
  const ratio = ((+value.has * +value.price) / autoTotal) * 100;

  return (
    <>
      <div className="w-full flex flex-col items-center gap-1 h-[40px] justify-center">
        <p className="font-bold">{row.mainLabel}</p>
        <p className="text-xs">{row.subLabel}</p>
      </div>
      <div className="w-full h-full flex justify-center">
        <input
          type="number"
          min="0"
          className="input"
          value={!value.price ? "" : value.price}
          onChange={event => onChange(event, row.key, "price")}
        />
      </div>
      <div className="w-full h-full flex justify-center">
        <input
          type="number"
          min="0"
          className="input"
          value={!value.has || row.key === "deposit" ? "" : value.has}
          onChange={event => onChange(event, row.key, "has")}
          disabled={row.key === "deposit"}
        />
      </div>
      <p
        className={`w-full text-center font-bold text-base text-gray-700 ${
          isNaN(ratio) || ratio <= 30 ? "text-blue-500" : ratio <= 70 ? "text-orange-500" : "text-red-400"
        }`}
      >
        {getPercentage(+value.has * +value.price, autoTotal)}
      </p>
    </>
  );
}
