export const buildUShapeFunction =
  ({ indifference }: { indifference: number }) =>
  (distanceValue: number): number => {
    return distanceValue > indifference ? 1 : 0;
  };
