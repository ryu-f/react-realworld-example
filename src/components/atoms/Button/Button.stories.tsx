import * as React from 'react'

import { action } from '@storybook/addon-actions'
import { AnchorButton, BasicButton } from './'

export default {
  title: 'atoms|Button',
  component: BasicButton
}

type BasicButtonProps = React.ComponentProps<typeof BasicButton>

export const Basic = (args: BasicButtonProps) => <BasicButton {...args}>Basic</BasicButton>

Basic.args = {
  size: 'BASE',
  layout: 'BASIC',
  onClick: action('onClick')
}

type AnchorButtonProps = React.ComponentProps<typeof AnchorButton>

export const Anchor = (args: AnchorButtonProps) => <AnchorButton {...args}>Anchor</AnchorButton>

Anchor.args = {
  href: '#',
  size: 'BASE',
  layout: 'BASIC',
  onClick: action('onClick')
}
