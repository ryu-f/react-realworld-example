import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { CheckBox } from './'

export default {
  title: 'atoms|CheckBox',
  component: CheckBox
}

export const Basic = () => <CheckBox onInput={action('onCheck')} />
