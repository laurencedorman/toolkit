const mmConfig = require('@manomano/jest-config');

module.exports = Object.assign({}, mmConfig, {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverage: true,
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 45,
      lines: 65,
      statements: 65,
    },
  },
});
