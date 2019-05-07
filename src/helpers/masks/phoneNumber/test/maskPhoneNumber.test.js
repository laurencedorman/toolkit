/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import maskPhoneNumber from '../maskPhoneNumber';

describe('maskPhoneNumber', () => {
  const tests = [
    {
      expected: TypeError,
    },
    {
      test: null,
      expected: TypeError,
    },
    {
      test: { foo: 'bar' },
      expected: TypeError,
    },
    {
      test: '',
      options: ['foo', 'bar'],
      expected: TypeError,
    },
    {
      test: '',
      expected: '',
      options: {},
    },
    {
      test: '',
      expected: '',
      options: { zero: true },
    },
    {
      test: 'foo',
      expected: '',
      options: { zero: true },
    },
    {
      test: '9',
      expected: '+33 (0)9',
      options: {
        ext: '+33',
        zero: true,
        format: '## ## ## ## ##',
        formatChar: '#',
      },
    },
    {
      test: '9',
      expected: '09',
      options: {
        zero: true,
        format: '## ## ## ## ##',
        formatChar: '#',
      },
    },
    {
      test: '9',
      expected: '+33 9',
      options: {
        ext: '+33',
        format: '## ## ## ## ##',
        formatChar: '#',
      },
    },
    {
      test: '+33684372849',
      expected: '+33 (0)6 84 37 28 49',
      options: {
        ext: '+33',
        zero: true,
        format: '## ## ## ## ##',
        formatChar: '#',
      },
    },
    {
      test: '+3904******66',
      expected: '+39 04* *** **66',
      options: {
        ext: '+39',
        anonymized: true,
        format: '### ### ####',
        formatChar: '#',
      },
    },
    {
      test: '+3904******66',
      expected: '+39 046 6',
      options: {
        ext: '+39',
        format: '### ### ####',
        formatChar: '#',
      },
    },
    {
      test: '0453780966',
      expected: '045 378 0966',
      options: {
        format: '### ### ####',
        formatChar: '#',
      },
    },
    {
      test: '04537809',
      expected: '04 53 78 09',
      options: {
        format: '## ## ## ## ##',
        formatChar: '#',
      },
    },
    {
      test: '04537809',
      expected: '04 53 78 09 ',
      options: {
        format: '## ## ## ## ##',
        formatChar: '#',
        trimmed: false,
      },
    },
  ];

  tests.forEach(test => {
    const opts = test.options
      ? `options (${JSON.stringify(test.options)})`
      : 'no option';
    if (test.expected === TypeError) {
      it(`"${JSON.stringify(
        test.test
      )}" with ${opts} should throw an error`, () => {
        expect(() => maskPhoneNumber(test.test, test.options)).toThrow();
      });
    } else {
      it(`"${JSON.stringify(test.test)}" with ${opts} should return "${
        test.expected
      }"`, () => {
        expect(maskPhoneNumber(test.test, test.options)).toBe(test.expected);
      });
    }
  });
});
