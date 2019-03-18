/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
export function isNumber(value: any) {
  // Is it ok to return true for Infinity ?
  return typeof value === 'number' && !Number.isNaN(value);
}
