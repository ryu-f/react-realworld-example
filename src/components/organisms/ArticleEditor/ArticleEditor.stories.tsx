import * as React from 'react'

import { ArticleEditor } from './'
import { action } from '@storybook/addon-actions'

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
