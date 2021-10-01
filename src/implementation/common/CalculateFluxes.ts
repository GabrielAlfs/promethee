export const calculateFluxes = ({
  preferenceMatrix,
}: {
  preferenceMatrix: Array<Array<number>>;
}): {
  positiveFluxes: Array<number>;
  negativeFluxes: Array<number>;
} => {
  return {
    positiveFluxes: preferenceMatrix.map(
      (arr) => arr.reduce((acc, v) => v + acc) / (preferenceMatrix.length - 1),
    ),
    negativeFluxes: preferenceMatrix
      .reduce((acc, arr) => acc.map((item, index) => item + arr[index]))
      .map((v) => v / (preferenceMatrix.length - 1)),
  };
};
