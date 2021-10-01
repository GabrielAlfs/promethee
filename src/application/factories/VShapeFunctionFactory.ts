export const buildVShapeFunction =
  ({ preference }: { preference: number }) =>
  (distanceValue: number): number => {
    if (distanceValue > 0) {
      return distanceValue > preference ? 1 : distanceValue / preference;
    }
    return 0;
  };
