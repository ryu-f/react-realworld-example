const baseConfig = require('./jest.config')

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/tests/e2e/**/*.(spec|test).(ts|tsx)'],
  preset: 'jest-puppeteer'
}
