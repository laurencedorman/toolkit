// @flow
export function isNumber(value: any) {
  // Is it ok to return true for Infinity ?
  return typeof value === 'number' && !Number.isNaN(value);
}
