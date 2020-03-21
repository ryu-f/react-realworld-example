module.exports = {
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  coverageDirectory: 'tests/unit/coverage',
  collectCoverageFrom: ['src/**/*.tsx'],
  coveragePathIgnorePatterns: ['.stories.tsx'],
  coverageReporters: ['html'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
