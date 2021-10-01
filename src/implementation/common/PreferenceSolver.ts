import { Alternative } from '@domain/entities/Alternative';
import { Criterion } from '@domain/entities/Criterion';

const distanceMatrix = ({
  matrix,
  criterionIndex,
}: {
  matrix: Array<Array<number>>;
  criterionIndex: number;
}) => {
  return Array.from(Array(matrix.length))
    .map(() => Array.from(Array(matrix.length)).map(() => 0))
    .map((array, arrayIndex) =>
      array.map(
        (_item, itemIndex) =>
          matrix[arrayIndex][criterionIndex] -
          matrix[itemIndex][criterionIndex],
      ),
    );
};

const normalizeWeights = ({
  criteria,
}: {
  criteria: Array<Criterion>;
}): Array<Criterion> =>
  criteria.map((criterion) => ({
    ...criterion,
    weight: criterion.weight / criteria.reduce((acc, v) => v.weight + acc, 0),
  }));

export const preferenceSolver = ({
  alternatives,
  criteria,
}: {
  alternatives: Array<Alternative>;
  criteria: Array<Criterion>;
}): Array<Array<number>> => {
  const preferenceMatrix = Array.from(Array(alternatives.length)).map(() =>
    Array.from(Array(alternatives.length)).map(() => 0),
  );

  normalizeWeights({ criteria }).forEach((criterion, criterionIndex) => {
    const distanceArray = distanceMatrix({
      matrix: alternatives.map((alternative) => alternative.evaluations),
      criterionIndex,
    }).map((array, arrayIndex) =>
      array.map((item, itemIndex) =>
        arrayIndex !== itemIndex
          ? criterion.preferenceFunction(
              item *
                ({ maximize: 1, minimize: -1 } as Record<string, number>)[
                  criterion.objective
                ],
            )
          : 0,
      ),
    );

    preferenceMatrix.forEach((array, arrayIndex) => {
      array.forEach((_item, index) => {
        preferenceMatrix[arrayIndex][index] +=
          criterion.weight * distanceArray[arrayIndex][index];
      });
    });
  });

  return preferenceMatrix;
};
