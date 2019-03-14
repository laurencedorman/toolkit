// @flow
import { isArray } from './isArray';
import { isDefinedAndNotNull } from './isDefinedAndNotNull';
import { isPlainObject } from './isPlainObject';
import { isString } from './isString';

const EMPTY_STRING_REGEXP = /^\s*$/;

export function isEmpty(value: any) {
  if (!isDefinedAndNotNull(value)) {
    return true;
  }

  if (isString(value)) {
    return EMPTY_STRING_REGEXP.test(value);
  }

  if (isArray(value)) {
    return value.length === 0;
  }

  if (isPlainObject(value)) {
    return Object.keys(value).length === 0;
  }

  return false;
}
