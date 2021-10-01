import {
  PrometheeOnePort,
  PrometheeOneResult,
  PrometheeOneUseCase,
} from '@domain/usecases/PrometheeOne';
import { calculateFluxes } from '@implementation/common/CalculateFluxes';
import { preferenceSolver } from '@implementation/common/PreferenceSolver';

export class CalculatePrometheeOne implements PrometheeOneUseCase {
  public execute({
    alternatives,
    criteria,
  }: PrometheeOnePort): PrometheeOneResult {
    const preferenceMatrix = preferenceSolver({ alternatives, criteria });

    const { positiveFluxes, negativeFluxes } = calculateFluxes({
      preferenceMatrix,
    });

    return alternatives
      .map((alternative, index) => ({
        alternativeIdentifier: alternative.identifier,
        negativeFlux: negativeFluxes[index],
        positiveFlux: positiveFluxes[index],
      }))
      .sort(
        (firstAlt, secondAlt) => secondAlt.positiveFlux - firstAlt.positiveFlux,
      );
  }
}
