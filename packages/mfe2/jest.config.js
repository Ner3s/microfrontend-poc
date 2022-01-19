module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: false,
  bail: 1,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
};
