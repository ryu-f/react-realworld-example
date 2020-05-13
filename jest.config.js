module.exports = {
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  coveragePathIgnorePatterns: ['.stories.tsx', '.d.ts'],
  coverageReporters: ['html'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  }
}
