// @flow
function isNumber(value: any) {
  return typeof value === 'number' && !Number.isNaN(value);
}

export default isNumber;
