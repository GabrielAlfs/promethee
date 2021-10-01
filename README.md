# PROMETHEE (Preference Ranking Organization METHod for Enrichment Evaluation)

A simplified package for calculating the multi-criteria decision analysis methods PROMETHEE I and II.

usage:

```ts
import {
  buildLinearFunction,
  calculatePrometheeOne,
  calculatePrometheeTwo,
} from 'promethee';

const criteria = [
  {
    name: 'Preço',
    weight: 0.25,
    objective: 'minimize',
    preferenceFunction: buildLinearFunction({
      preference: 5000,
      indifference: 2000,
    }),
  },
  {
    name: 'Complexidade',
    weight: 0.25,
    objective: 'minimize',
    preferenceFunction: buildLinearFunction({
      preference: 1,
      indifference: 0.5,
    }),
  },
  {
    name: 'Segurança',
    weight: 0.25,
    objective: 'maximize',
    preferenceFunction: buildLinearFunction({
      preference: 2,
      indifference: 1
    }),
  },
  {
    name: 'Desempenho',
    weight: 0.25,
    objective: 'maximize',
    preferenceFunction: buildLinearFunction({
      preference: 20,
      indifference: 10,
    }),
  },
];

const alternatives = [
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


const result = calculatePrometheeTwo({ alternatives, criteria });

console.table(result);
```
