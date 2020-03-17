import * as React from 'react'

import { RegistrationForm } from './'
import { action } from '@storybook/addon-actions'

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
