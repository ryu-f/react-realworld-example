import * as React from 'react'

import { TextArea } from './'
import { action } from '@storybook/addon-actions'

export default {
  title: 'atoms|TextArea',
  component: TextArea
}

export const Basic = () => <TextArea onInput={action('onInput')} />
