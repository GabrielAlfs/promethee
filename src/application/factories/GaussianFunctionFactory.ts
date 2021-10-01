export const buildGaussianFunction =
  ({ inflection }: { inflection: number }) =>
  (distanceValue: number): number =>
    distanceValue > 0
      ? 1 - Math.exp(-(distanceValue ** 2) / (2 * inflection ** 2))
      : 0;
