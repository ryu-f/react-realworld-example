const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  on('file:preprocessor', cypressTypeScriptPreprocessor)
}
