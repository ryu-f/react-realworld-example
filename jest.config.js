'use strict'

module.exports = {
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
  transform: {
    '^.+\\.[j|t]sx?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  coveragePathIgnorePatterns: ['.stories.tsx', '.d.ts'],
  coverageReporters: ['lcov'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', 'tests/unit']
}
