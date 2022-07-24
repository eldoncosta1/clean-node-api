module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  preset: '@shelf/jest-mongodb',
  transform: {
    '\\.ts$': 'ts-jest'
  }
}
