module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'unit-no-unknown': null,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/-styled-mixin/']
      }
    ],
    'order/order': [['custom-properties', 'declarations'], { disableFix: true }],
    'value-keyword-case': null
  }
}
