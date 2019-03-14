// @flow
import { isNumber } from './isNumber';

export function isInteger(value: any) {
  return isNumber(value) && value % 1 === 0;
}
