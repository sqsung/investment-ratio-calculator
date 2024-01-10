interface TotalProps {
  autoTotal: string | number;
}

export default function Total({ autoTotal }: TotalProps) {
  return (
    <div className="bg-gray-50 pl-[80px] h-[40px] border-t border-gray-300 grid grid-cols-[2fr,1fr,1fr,1fr,1fr] text font-bold text-gray-500">
      <p className="w-full h-full flex justify-center items-center">합계</p>
      <p className="w-full h-full flex justify-center items-center text-secondary font-bold">
        {autoTotal.toLocaleString() || 0}원
      </p>
    </div>
  );
}
