import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import { AnchorButton, BasicButton } from './'

export default {
  title: 'atoms|Button',
  component: BasicButton,
  decorators: [withKnobs]
}

export const Basic = () => (
  <BasicButton onClick={action('onClick')} size="BASE" layout="BASIC">
    {text('Label', 'Basic')}
  </BasicButton>
)

export const Anchor = () => (
  <AnchorButton href="#" onClick={action('onClick')} size="BASE" layout="BASIC">
    {text('Label', 'Anchor')}
  </AnchorButton>
)
