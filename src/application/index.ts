import {
  buildGaussianFunction,
  buildLevelFunction,
  buildLinearFunction,
  buildUShapeFunction,
  buildUsualFunction,
  buildVShapeFunction,
} from '@application/factories';
import {
  CalculatePrometheeOne,
  CalculatePrometheeTwo,
} from '@implementation/services';
import { serviceAdapter } from '@application/adapters/ServiceAdapter';

const calculatePrometheeOneService = new CalculatePrometheeOne();

const calculatePrometheeTwoService = new CalculatePrometheeTwo();

const calculatePrometheeOne = serviceAdapter({
  serviceInstance: calculatePrometheeOneService,
});

const calculatePrometheeTwo = serviceAdapter({
  serviceInstance: calculatePrometheeTwoService,
});

export {
  calculatePrometheeOne,
  calculatePrometheeTwo,
  buildGaussianFunction,
  buildLevelFunction,
  buildLinearFunction,
  buildUShapeFunction,
  buildUsualFunction,
  buildVShapeFunction,
};
