/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow

import { isPlainObject, isString } from 'helpers/validators';
import type { maskPhoneNumberOptions } from './maskPhoneNumberTypes.flow';
import unmaskPhoneNumber from './unmaskPhoneNumber';
import ZERO from './constantPhoneNumber';
import mask from '../mask';

function maskPhoneNumber(value: string, options: maskPhoneNumberOptions) {
  if (!isString(value)) {
    throw new TypeError('Invalid value for the parameter `value`: must be a string!');
  }
  if (!isPlainObject(options)) {
    throw new TypeError('Invalid value for the parameter `options`: must be an object!');
  }

  let { format } = options;
  const {
    ext,
    zero,
    anonymized,
    formatChar,
    separator = ' ',
    trimmed = true,
  } = options;
  const maxLength = format && typeof format === 'string' ? format.split(formatChar).length - 1 : 0;

  let v = unmaskPhoneNumber(value, {
    ext,
    zero,
    anonymized,
    maxLength,
  });
  if (!v) {
    return '';
  }

  const output = [];

  if (ext && typeof ext === 'string') {
    output.push(ext);
    output.push(separator);

    if (zero === true && v.startsWith('0')) {
      v = v.substring(1);
      format = format.replace(formatChar, '');
      output.push(ZERO);
    }
  }

  output.push(mask(v, { formatChar, format, trimmed }));

  return output.join('');
}

export default maskPhoneNumber;
