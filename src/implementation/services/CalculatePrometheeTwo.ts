import {
  PrometheeTwoPort,
  PrometheeTwoResult,
  PrometheeTwoUseCase,
} from '@domain/usecases/PrometheeTwo';
import { calculateFluxes } from '@implementation/common/CalculateFluxes';
import { preferenceSolver } from '@implementation/common/PreferenceSolver';

export class CalculatePrometheeTwo implements PrometheeTwoUseCase {
  public execute({
    alternatives,
    criteria,
  }: PrometheeTwoPort): PrometheeTwoResult {
    const preferenceMatrix = preferenceSolver({ alternatives, criteria });

    const { positiveFluxes, negativeFluxes } = calculateFluxes({
      preferenceMatrix,
    });

    const liquidFluxes = positiveFluxes.map(
      (item, index) => item - negativeFluxes[index],
    );

    return alternatives
      .map((alternative, index) => ({
        alternativeIdentifier: alternative.identifier,
        liquidFlux: liquidFluxes[index],
        negativeFlux: negativeFluxes[index],
        positiveFlux: positiveFluxes[index],
      }))
      .sort(
        (firstAlt, secondAlt) => secondAlt.liquidFlux - firstAlt.liquidFlux,
      );
  }
}
