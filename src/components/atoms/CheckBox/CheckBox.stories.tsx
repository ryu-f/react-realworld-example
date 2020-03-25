import * as React from 'react'

import { CheckBox } from './'
import { action } from '@storybook/addon-actions'

export default {
  title: 'atoms|CheckBox',
  component: CheckBox
}

export const Basic = () => <CheckBox onInput={action('onCheck')} />
