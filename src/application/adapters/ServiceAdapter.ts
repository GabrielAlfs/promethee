import { UseCase } from '../../domain/common/UseCase';

export const serviceAdapter =
  <Port, Result>({
    serviceInstance,
  }: {
    serviceInstance: UseCase<Port, Result>;
  }) =>
  (payload: Port): Result =>
    serviceInstance.execute(payload);
