/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isPlainObject, isString } from 'helpers/validators';
import ZERO from './constantPhoneNumber';

const REPLACER = {
  ANONYMIZED: new RegExp('[^0-9*]', 'g'),
  NORMAL: new RegExp('\\D', 'g'),
};

/**
 *
 * @param {string} value
 * @param {{ ext: string, zero: boolean, anonymized: boolean, maxLength: number }} options
 */

function unmaskPhoneNumber(value, options) {
  if (!isString(value)) {
    throw new TypeError(
      'Invalid value for the parameter `value`: must be a string!'
    );
  }
  if (!isPlainObject(options)) {
    throw new TypeError(
      'Invalid value for the parameter `options`: must be an object!'
    );
  }

  const { ext, zero, anonymized, maxLength } = options;

  let v = value.trim();
  if (!v || !v.length) {
    return '';
  }

  if (ext && typeof ext === 'string' && v.startsWith(ext)) {
    v = v.substring(ext.length);
  }

  v = v.replace(ZERO, zero === true ? '0' : '');
  v = v.replace(
    anonymized === true ? REPLACER.ANONYMIZED : REPLACER.NORMAL,
    ''
  );

  if (zero === true && v.length && !v.startsWith('0')) {
    v = `0${v}`;
  }

  if (maxLength && v.length > maxLength) {
    v = v.substr(0, maxLength);
  }

  return v;
}

export default unmaskPhoneNumber;
