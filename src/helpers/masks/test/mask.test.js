import mask from '../mask';

describe('mask', () => {
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
      test: 'Super',
      expected: 'Su % per',
      options: {
        formatChar: '#',
        format: '## % ###!###',
      },
    },
    {
      test: 'Super',
      expected: 'Su per!',
      options: {
        formatChar: '*',
        format: '** ***!***',
        trimmed: false,
      },
    },
    {
      test: 'Super cool',
      expected: 'Super!',
      options: {
        formatChar: '*',
        format: '*****!',
        trimmed: false,
      },
    },
  ];

  tests.forEach((test) => {
    const opts = test.options ? `options (${JSON.stringify(test.options)})` : 'no option';
    if (test.expected === TypeError) {
      it(`"${JSON.stringify(test.test)}" with ${opts} should throw an error`, () => {
        expect(() => mask(test.test, test.options)).toThrow();
      });
    } else {
      it(`"${JSON.stringify(test.test)}" with ${opts} should return "${test.expected}"`, () => {
        expect(mask(test.test, test.options)).toBe(test.expected);
      });
    }
  });
});
