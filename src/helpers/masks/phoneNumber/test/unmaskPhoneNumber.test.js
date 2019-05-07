/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import unmaskPhoneNumber from '../unmaskPhoneNumber';

describe('unmaskPhoneNumber', () => {
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
      options: {
        zero: true,
      },
    },
    {
      test: 'foo',
      expected: '',
      options: {
        zero: true,
      },
    },
    {
      test: '+33 (0)9',
      expected: '09',
      options: {
        ext: '+33',
        zero: true,
      },
    },
    {
      test: '(0)9',
      expected: '9',
      options: {},
    },
    {
      test: '+33 9',
      expected: '9',
      options: {
        ext: '+33',
      },
    },
    {
      test: '+33684372849',
      expected: '33684372849',
      options: {},
    },
    {
      test: '+33684372849',
      expected: '033684372849',
      options: {
        zero: true,
      },
    },
    {
      test: '+33684372849',
      expected: '0684372849',
      options: {
        ext: '+33',
        zero: true,
      },
    },
    {
      test: '+33 (0)6 84 99 28 49',
      expected: '0684992849',
      options: {
        ext: '+33',
        zero: true,
      },
    },
    {
      test: '+352 24 1611 67',
      expected: '241611',
      options: {
        ext: '+352',
        maxLength: 6,
      },
    },
    {
      test: '+41 (0)1* *** **90',
      expected: '0190',
      options: {
        ext: '+41',
        zero: true,
      },
    },
    {
      test: '+41 (0)1* *** **90',
      expected: '01******90',
      options: {
        ext: '+41',
        zero: true,
        anonymized: true,
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
        expect(() => unmaskPhoneNumber(test.test, test.options)).toThrow();
      });
    } else {
      it(`"${JSON.stringify(test.test)}" with ${opts} should return "${
        test.expected
      }"`, () => {
        expect(unmaskPhoneNumber(test.test, test.options)).toBe(test.expected);
      });
    }
  });
});
