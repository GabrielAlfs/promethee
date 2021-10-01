import { UseCase } from '@domain/common/UseCase';
import { Alternative } from '@domain/entities/Alternative';
import { Criterion } from '@domain/entities/Criterion';

export type PrometheeOnePort = {
  criteria: Array<Criterion>;
  alternatives: Array<Alternative>;
};

export type PrometheeOneResult = Array<{
  alternativeIdentifier: string;
  positiveFlux: number;
  negativeFlux: number;
}>;

export interface PrometheeOneUseCase
  extends UseCase<PrometheeOnePort, PrometheeOneResult> {}
