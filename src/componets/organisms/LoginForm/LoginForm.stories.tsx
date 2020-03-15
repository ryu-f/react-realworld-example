import * as React from 'react'

import { LoginForm } from './'
import { action } from '@storybook/addon-actions'

export default {
  title: 'organisms|LoginForm',
  component: LoginForm
}

export const Basic = () => (
  <LoginForm
    onSubmit={() => {
      action('form submitted')
    }}
  />
)
