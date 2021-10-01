import {
  buildLinearFunction,
  calculatePrometheeOne,
  calculatePrometheeTwo,
} from '../src/application';
import { Alternative } from '../src/domain/entities/Alternative';
import { Criterion } from '../src/domain/entities/Criterion';

const alternatives: Array<Alternative> = [
  {
    identifier: 'SAP',
    evaluations: [15000, 7.5, 1, 50],
  },
  {
    identifier: 'Oracle',
    evaluations: [29000, 9, 4, 110],
  },
  {
    identifier: 'Totvs',
    evaluations: [38000, 8.5, 10, 90],
  },
  {
    identifier: 'Microsoft',
    evaluations: [24000, 8, 8, 75],
  },
  {
    identifier: 'IBM',
    evaluations: [25500, 7, 8, 85],
  },
];

const criteria: Array<Criterion> = [
  {
    name: 'Preço',
    weight: 1,
    objective: 'minimize',
    preferenceFunction: buildLinearFunction({
      preference: 5000,
      indifference: 2000,
    }),
  },
  {
    name: 'Complexidade',
    weight: 1,
    objective: 'minimize',
    preferenceFunction: buildLinearFunction({
      preference: 1,
      indifference: 0.5,
    }),
  },
  {
    name: 'Segurança',
    weight: 1,
    objective: 'maximize',
    preferenceFunction: buildLinearFunction({ preference: 2, indifference: 1 }),
  },
  {
    name: 'Desempenho',
    weight: 1,
    objective: 'maximize',
    preferenceFunction: buildLinearFunction({
      preference: 20,
      indifference: 10,
    }),
  },
];

const resultOne = calculatePrometheeOne({ alternatives, criteria });
const resultTwo = calculatePrometheeTwo({ alternatives, criteria });

console.table(resultOne);
console.table(resultTwo);
