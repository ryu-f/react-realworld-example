import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { ArticleEditor } from './'

export default {
  title: 'organisms|ArticleEditor',
  component: ArticleEditor
}

export const Basic = () => (
  <ArticleEditor
    onSubmit={() => {
      action('form submitted')
    }}
  />
)
