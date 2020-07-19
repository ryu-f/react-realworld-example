'use strict'

const path = require('path')
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      webpack: { config: path.join(__dirname, './webpack.common.js') }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest', 'jest-dom'],
  env: {
    node: true,
    jest: true,
    browser: true
  },
  rules: {
    complexity: ['warn', 10],
    'no-console': IS_PRODUCTION ? 'error' : 'off',
    'no-debugger': IS_PRODUCTION ? 'error' : 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'import/order': ['error'],
    'import/named': 'off',
    'jest/no-disabled-tests': IS_PRODUCTION ? 'error' : 'off'
  },
  globals: {
    page: true,
    browser: true,
    context: true
  }
}
