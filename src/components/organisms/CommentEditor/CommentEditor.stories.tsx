import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { CommentEditor } from './'

export default {
  title: 'organisms|CommentEditor',
  component: CommentEditor
}

export const Basic = () => (
  <CommentEditor
    image="https://via.placeholder.com/150"
    onSubmit={() => {
      action('form submitted')
    }}
  />
)
