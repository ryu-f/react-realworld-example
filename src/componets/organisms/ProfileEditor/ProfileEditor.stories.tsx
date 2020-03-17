import * as React from 'react'

import { ProfileEditor } from './'
import { action } from '@storybook/addon-actions'

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
  />
)
