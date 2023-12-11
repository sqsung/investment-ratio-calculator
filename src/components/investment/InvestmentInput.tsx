interface InvestmentInputProps {
  mainLabel: string;
  subLabel?: string;
}

export default function InvestmentInput({ mainLabel, subLabel = "" }: InvestmentInputProps) {
  return (
    <div className="flex gap-5 w-full justify-around">
      <div className="w-full flex flex-col items-center gap-1 h-[40px] justify-center">
        <p className="font-bold">{mainLabel}</p>
        <p className="text-xs">{subLabel}</p>
      </div>
      <input type="number" className="input"></input>
      <input type="number" className="input"></input>
      <p className="w-full text-center font-bold text-lg text-primary">50%</p>
      <p className="w-full text-center font-bold text-lg text-primary">50%</p>
      <p className="w-full text-center font-bold text-lg text-primary">50%</p>
    </div>
  );
}
