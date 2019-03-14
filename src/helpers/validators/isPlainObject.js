// @flow
export function isPlainObject(value: any) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
