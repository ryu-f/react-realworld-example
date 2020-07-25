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
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import', 'babel-plugin-styled-components']
}

const productionConfig = {
  ...baseConfig,
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        fileName: false,
        displayName: false,
        pure: true
      }
    ]
  ]
}

module.exports = {
  ...baseConfig,
  env: {
    production: { ...productionConfig }
  }
}
