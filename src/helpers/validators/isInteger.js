// @flow
import isNumber from './isNumber';

function isInteger(value: any) {
  return isNumber(value) && value % 1 === 0;
}

export default isInteger;
