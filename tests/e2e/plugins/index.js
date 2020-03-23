const wp = require('@cypress/webpack-preprocessor')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js']
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ]
      }
    }
  }
  on('file:preprocessor', wp(options))
}
