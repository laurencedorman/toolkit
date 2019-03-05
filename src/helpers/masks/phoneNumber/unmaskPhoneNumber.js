// @flow
import type { unmaskPhoneNumberOptions } from './type.flow';
import ZERO from './constantPhoneNumber';

const REPLACER = {
  ANONIMIZED: new RegExp('[^0-9*]', 'g'),
  NORMAL: new RegExp('\\D', 'g'),
};

function unmaskPhoneNumber(value: string, options: unmaskPhoneNumberOptions) {
  if (typeof value !== 'string') {
    throw new TypeError('Invalid value for the parameter `value`: must be a string!');
  }
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('Invalid value for the parameter `options`: must be an object!');
  }

  const {
    ext,
    zero,
    anonymized,
    maxLength,
  } = options;

  let v = value.trim();
  if (!v || !v.length) {
    return '';
  }

  if (ext && typeof ext === 'string' && v.startsWith(ext)) {
    v = v.substring(ext.length);
  }

  v = v.replace(ZERO, zero === true ? '0' : '');
  v = v.replace(anonymized === true ? REPLACER.ANONIMIZED : REPLACER.NORMAL, '');

  if (zero === true && v.length && !v.startsWith('0')) {
    v = `0${v}`;
  }

  if (maxLength && v.length > maxLength) {
    v = v.substr(0, maxLength);
  }

  return v;
}

export default unmaskPhoneNumber;
