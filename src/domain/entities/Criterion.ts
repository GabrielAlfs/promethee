export interface Criterion {
  name: string;
  weight: number;
  objective: 'maximize' | 'minimize';
  preferenceFunction: (differenceValue: number) => number;
}
