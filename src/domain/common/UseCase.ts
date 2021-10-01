export interface UseCase<Port, Result> {
  execute(port: Port): Result;
}
