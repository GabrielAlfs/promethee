export const buildLevelFunction =
  ({
    preference,
    indifference,
  }: {
    preference: number;
    indifference: number;
  }) =>
  (distanceValue: number): number => {
    if (distanceValue > indifference) {
      return distanceValue > preference ? 1 : 0.5;
    }
    return 0;
  };
