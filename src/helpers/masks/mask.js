/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isPlainObject, isString } from 'helpers/validators';

/**
 *
 * @param {string} value
 * @param {{ format: string, formatChar: string, trimmed: boolean }} options
 */

function mask(value, options) {
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

  const { formatChar, format, trimmed = true } = options;
  const maxLength =
    format && typeof format === 'string'
      ? format.split(formatChar).length - 1
      : 0;
  if (!maxLength) {
    return '';
  }

  const output = [];
  const explodedValue = value.split('');
  const explodedFormat = format.split('');
  let explodedFormatIndex = 0;

  while (explodedFormatIndex < explodedFormat.length && explodedValue.length) {
    const char = explodedFormat[explodedFormatIndex];
    output.push(char !== formatChar ? char : explodedValue.shift());

    explodedFormatIndex += 1;
  }

  if (
    trimmed !== true &&
    explodedValue.length === 0 &&
    explodedFormat[explodedFormatIndex] !== formatChar
  ) {
    let char = explodedFormat[explodedFormatIndex];
    while (explodedFormatIndex < explodedFormat.length && char !== formatChar) {
      char = explodedFormat[explodedFormatIndex];
      output.push(char !== formatChar ? char : explodedValue.shift());

      explodedFormatIndex += 1;
    }
  }

  return output.join('');
}

export default mask;
