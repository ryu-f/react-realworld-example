import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { TextArea } from './'

export default {
  title: 'atoms|TextArea',
  component: TextArea
}

export const Basic = () => <TextArea onInput={action('onInput')} />
