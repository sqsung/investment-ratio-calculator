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
  if (!total || !price) return null;

  const targetQuantity = Math.round((total * targetRatio) / price);
  const changeQuantity = targetQuantity - has;

  return {
    targetQuantity: targetQuantity.toLocaleString(),
    changeQuantity: `${changeQuantity > 0 ? "+" : ""}${changeQuantity.toLocaleString()}`,
    needsMore: !!(changeQuantity > 0),
  };
}
