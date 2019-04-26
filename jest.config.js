const mmConfig = require('@manomano/jest-config');

module.exports = Object.assign({}, mmConfig, {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 85,
      statements: 85,
    },
  },
});
