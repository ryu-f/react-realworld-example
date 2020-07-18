import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { LoginForm } from './'

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
