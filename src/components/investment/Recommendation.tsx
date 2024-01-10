import { getRequiredChange } from "@/utils/format";

interface RecommendationProps {
  total: number;
  price: number;
  has: number;
  targetRatio: number;
  isDeposit: boolean;
}

export default function Recommendation({ total, targetRatio, price, has, isDeposit }: RecommendationProps) {
  const change = getRequiredChange({
    total,
    price,
    has,
    targetRatio,
  });

  return (
    <div className="flex w-full">
      <p className="flex justify-center w-full italic text-gray-500 font-light text-2xl">
        {(targetRatio * 100).toFixed(1) + "%"}
      </p>
      <div className="w-full">
        <p className="text-center font-bold text-2xl text-gray-700">{!change ? "-" : `${change.targetQuantity}`}</p>
        <p className="text-center text-base text-gray-700">
          {!change || isDeposit ? (
            ""
          ) : (
            <span className={`font-bold ${change.needsMore ? "text-blue-500" : "text-red-500"}`}>
              {change.changeQuantity}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
