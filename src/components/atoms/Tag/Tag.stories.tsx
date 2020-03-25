import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'

import { Tag } from './'

export default {
  title: 'atoms|Tag',
  component: Tag,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Tag size="BASE" layout="BASIC">
    {text('Label', 'Basic')}
  </Tag>
)
