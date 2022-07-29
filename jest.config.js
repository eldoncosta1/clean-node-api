module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  // testMatch: ['**/*.spec.ts'],
  preset: '@shelf/jest-mongodb',
  transform: {
    '\\.ts$': 'ts-jest'
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ]
}
