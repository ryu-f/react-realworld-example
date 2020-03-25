import * as React from 'react'

import { number, text, withKnobs } from '@storybook/addon-knobs'

import { BasicText } from './'

export default {
  title: 'atoms|Text',
  component: Text,
  decorators: [withKnobs]
}

export const Basic = () => {
  const size = number('size', 16)

  return (
    <BasicText size={size} textcolor={'BLACK'}>
      {text('Label', 'Basic')}
    </BasicText>
  )
}
