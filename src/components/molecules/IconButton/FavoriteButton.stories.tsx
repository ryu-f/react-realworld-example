import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import { FavoriteButton } from './'

export default {
  title: 'atoms|Button',
  component: FavoriteButton,
  decorators: [withKnobs]
}

export const Basic = () => (
  <FavoriteButton onClick={action('onClick')} size="BASE">
    {text('Label', 'Basic')}
  </FavoriteButton>
)
