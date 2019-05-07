/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isPlainObject } from '../isPlainObject';

describe('isPlainObject', () => {
  const tests = [
    {
      test: undefined,
      expected: false,
    },
    {
      test: null,
      expected: false,
    },
    {
      test: true,
      expected: false,
    },
    {
      test: false,
      expected: false,
    },
    {
      test: 1,
      expected: false,
    },
    {
      test: 0,
      expected: false,
    },
    {
      test: 57.99,
      expected: false,
    },
    {
      test: '',
      expected: false,
    },
    {
      test: '46',
      expected: false,
    },
    {
      test: 'foo',
      expected: false,
    },
    {
      test: new Date(),
      expected: false,
    },
    {
      test: [],
      expected: false,
    },
    {
      test: ['', {}, 8],
      expected: false,
    },
    {
      test: {},
      expected: true,
    },
    {
      test: { foo: 'bar' },
      expected: true,
    },
    {
      test: () => {},
      expected: false,
    },
  ];

  tests.forEach(test => {
    it(`isPlainObject(${JSON.stringify(test.test)}) should return "${
      test.expected
    }"`, () => {
      expect(isPlainObject(test.test)).toBe(test.expected);
    });
  });
});
