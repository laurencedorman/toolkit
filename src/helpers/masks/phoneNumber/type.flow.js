// @flow
import type { MaskOptions } from '../type.flow';

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
