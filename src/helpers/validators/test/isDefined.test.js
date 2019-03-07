import isDefined from '../isDefined';

describe('isDefined', () => {
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
      expected: true,
    },
    {
      test: false,
      expected: true,
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
      expected: true,
    },
    {
      test: '',
      expected: true,
    },
    {
      test: '46',
      expected: true,
    },
    {
      test: 'foo',
      expected: true,
    },
    {
      test: new Date(),
      expected: true,
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
      expected: true,
    },
    {
      test: { foo: 'bar' },
      expected: true,
    },
    {
      test: () => {},
      expected: true,
    },
  ];

  tests.forEach((test) => {
    it(`isDefined(${JSON.stringify(test.test)}) should return "${test.expected}"`, () => {
      expect(isDefined(test.test)).toBe(test.expected);
    });
  });
});
