const mmConfig = require('@manomano/jest-config');

module.exports = Object.assign({}, mmConfig, {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverage: true,
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
});
