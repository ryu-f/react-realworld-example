import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { TagList } from './'

export default {
  title: 'organisms|TagList',
  component: TagList
}

export const LoggedIn = () => {
  const tags = ['tagA', 'tagB', 'tagC', 'tagD', 'tagE']

  return <TagList tags={tags} selected="tagA" onClick={action('onClick')} />
}
