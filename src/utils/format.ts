export function getPercentage(num: number, den: number) {
  const raw = (num / den) * 100;
  return raw === 0 || isNaN(raw) ? "0%" : `${raw.toFixed(2)}%`;
}

export function getRequiredChange({
  total,
  price,
  has,
  targetRatio,
}: {
  total: number;
  has: number;
  price: number;
  targetRatio: number;
}) {
  // const;

  return total && price ? `${Math.round((total * targetRatio) / price)}` : "-";
}
