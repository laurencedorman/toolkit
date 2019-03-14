import { isArray } from '../isArray';

describe('isArray', () => {
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
      expected: true,
    },
    {
      test: ['', {}, 8],
      expected: true,
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
    it(`isArray(${JSON.stringify(test.test)}) should return "${test.expected}"`, () => {
      expect(isArray(test.test)).toBe(test.expected);
    });
  });
});
