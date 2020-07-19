import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { ProfileEditor } from './'

export default {
  title: 'organisms|ProfileEditor',
  component: ProfileEditor
}

export const Basic = () => (
  <ProfileEditor
    email="email@com"
    username="username"
    bio="bio"
    image="imageurl.jp"
    onSubmit={() => {
      action('form submitted')
    }}
    logout={() => {
      action('logout')
    }}
  />
)
