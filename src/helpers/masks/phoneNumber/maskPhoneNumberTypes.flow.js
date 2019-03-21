/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 // @flow

import type { MaskOptions } from '../maskTypes.flow';

type phoneNumberOptions = {
  ext?: string,
  zero?: boolean,
  anonymized?: boolean,
};

export type unmaskPhoneNumberOptions = phoneNumberOptions & {
  maxLength: number,
};

export type maskPhoneNumberOptions = MaskOptions & phoneNumberOptions & {
  separator?: string,
};
