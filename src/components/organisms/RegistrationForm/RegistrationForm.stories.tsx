import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { RegistrationForm } from './'

export default {
  title: 'organisms|RegistrationForm',
  component: RegistrationForm
}

export const Basic = () => (
  <RegistrationForm
    onSubmit={() => {
      action('form submitted')
    }}
  />
)
