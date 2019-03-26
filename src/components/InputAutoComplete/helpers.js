/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 *
 * @param {string} text
 * @param {string} highlightText
 * @returns {[{ strong: boolean, text: string }]} RichText
 */
export function highlight(text, highlightText = '') {
  // String.prototype.normalize does not exist in IE11 and right now (05/03/19) polyfill.io does
  // not provide that polyfill so it will be accent sensitive in IE11 as it is an acceptable
  // behavior.
  const formatString = s =>
    (s.normalize ? s.normalize('NFD') : s).replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(`(${formatString(highlightText)})`, 'gi');

  if (highlightText.length === 0) {
    return [{ strong: false, text }];
  }

  const normalizedText = formatString(text);

  return normalizedText
    .split(regex)
    .map((value, index) => {
      const indexA = normalizedText.indexOf(value);
      return {
        strong: index % 2 === 1,
        text: text.substring(indexA, indexA + value.length),
      };
    })
    .filter(obj => obj.text.length > 0);
}
