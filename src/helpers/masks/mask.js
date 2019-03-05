// @flow
import type { MaskOptions } from './type.flow';

function mask(value: string, options: MaskOptions) {
  if (typeof value !== 'string') {
    throw new TypeError('Invalid value for the parameter `value`: must be a string!');
  }
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('Invalid value for the parameter `options`: must be an object!');
  }

  const { formatChar, format, trimmed = true } = options;
  const maxLength = format && typeof format === 'string' ? format.split(formatChar).length - 1 : 0;
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
    trimmed !== true
    && explodedValue.length === 0
    && explodedFormat[explodedFormatIndex] !== formatChar
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
