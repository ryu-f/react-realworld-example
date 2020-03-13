import * as React from 'react'

import { InputText } from './'
import { action } from '@storybook/addon-actions'

export default {
  title: 'atoms|InputText',
  component: InputText
}

export const basic = () => <InputText onInput={action('onInput')} />
