import { UseCase } from '@domain/common/UseCase';
import { Alternative } from '@domain/entities/Alternative';
import { Criterion } from '@domain/entities/Criterion';

export type PrometheeTwoPort = {
  criteria: Array<Criterion>;
  alternatives: Array<Alternative>;
};

export type PrometheeTwoResult = Array<{
  alternativeIdentifier: string;
  liquidFlux: number;
  positiveFlux: number;
  negativeFlux: number;
}>;

export interface PrometheeTwoUseCase
  extends UseCase<PrometheeTwoPort, PrometheeTwoResult> {}
