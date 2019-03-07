import isEmpty from '../isEmpty';

describe('isEmpty', () => {
  const tests = [
    {
      test: undefined,
      expected: true,
    },
    {
      test: null,
      expected: true,
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
      expected: true,
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
      expected: false,
    },
    {
      test: {},
      expected: true,
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
    it(`isEmpty(${JSON.stringify(test.test)}) should return "${test.expected}"`, () => {
      expect(isEmpty(test.test)).toBe(test.expected);
    });
  });
});
