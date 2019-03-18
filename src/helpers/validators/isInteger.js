/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow
import { isNumber } from './isNumber';

export function isInteger(value: any) {
  return isNumber(value) && value % 1 === 0;
}
