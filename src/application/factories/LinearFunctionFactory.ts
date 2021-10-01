export const buildLinearFunction =
  ({
    preference,
    indifference,
  }: {
    preference: number;
    indifference: number;
  }) =>
  (distanceValue: number): number => {
    if (distanceValue > indifference) {
      return distanceValue > preference
        ? 1
        : (distanceValue - indifference) / (preference - indifference);
    }
    return 0;
  };
