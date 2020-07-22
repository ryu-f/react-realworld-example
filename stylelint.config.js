module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [['custom-properties', 'declarations']],
    'value-keyword-case': null
  }
}
