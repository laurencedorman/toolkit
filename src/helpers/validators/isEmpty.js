// @flow
import isArray from './isArray';
import isDefined from './isDefined';
import isPlainObject from './isPlainObject';
import isString from './isString';

const EMPTY_STRING_REGEXP = /^\s*$/;

function isEmpty(value: any) {
  if (!isDefined(value)) {
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

export default isEmpty;
