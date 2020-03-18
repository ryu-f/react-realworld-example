import * as React from 'react'

import { CommentEditor } from './'
import { action } from '@storybook/addon-actions'

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
