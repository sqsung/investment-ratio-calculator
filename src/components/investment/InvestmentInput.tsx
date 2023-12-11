interface InvestmentInputProps {
  mainLabel: string;
  subLabel?: string;
}

export default function InvestmentInput({ mainLabel, subLabel = "" }: InvestmentInputProps) {
  return (
    <div className="flex gap-5">
      <div className="w-[250px] flex flex-col items-center gap-1 h-[40px] justify-center">
        <p className="font-bold">{mainLabel}</p>
        <p className="text-xs">{subLabel}</p>
      </div>
      <input type="number" className="input"></input>
      <input type="number" className="input"></input>
    </div>
  );
}
