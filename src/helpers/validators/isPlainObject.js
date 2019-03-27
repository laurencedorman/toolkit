/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
