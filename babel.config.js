'use strict'

const baseConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        targets: {
          node: 'current'
        },
        useBuiltIns: 'usage',
        shippedProposals: true
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ]
}

module.exports = {
  ...baseConfig,
  env: {
    development: {
      plugins: ['@babel/plugin-syntax-dynamic-import', 'babel-plugin-styled-components']
    },
    production: {
      plugins: ['@babel/plugin-syntax-dynamic-import']
    }
  }
}
