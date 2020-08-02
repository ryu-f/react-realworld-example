import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { FavoriteButton } from './'

export default {
  title: 'atoms|Button',
  component: FavoriteButton
}

export const Basic = () => (
  <FavoriteButton onClick={action('onClick')} size="BASE">
    Basic
  </FavoriteButton>
)
