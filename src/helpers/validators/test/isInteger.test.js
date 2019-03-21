/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isInteger } from '../isInteger';

describe('isInteger', () => {
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
      expected: true,
    },
    {
      test: 0,
      expected: true,
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
      expected: false,
    },
    {
      test: { foo: 'bar' },
      expected: false,
    },
    {
      test: () => {},
      expected: false,
    },
  ];

  tests.forEach((test) => {
    it(`isInteger(${JSON.stringify(test.test)}) should return "${test.expected}"`, () => {
      expect(isInteger(test.test)).toBe(test.expected);
    });
  });
});
