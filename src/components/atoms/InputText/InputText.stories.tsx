import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { InputText } from './'

export default {
  title: 'atoms|InputText',
  component: InputText
}

export const Basic = () => <InputText onInput={action('onInput')} />
