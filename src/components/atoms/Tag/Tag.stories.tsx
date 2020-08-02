import * as React from 'react'

import { Tag } from './'

export default {
  title: 'atoms|Tag',
  component: Tag
}

type Props = React.ComponentProps<typeof Tag>

export const Basic = (args: Props) => <Tag {...args}>Basic</Tag>

Basic.args = {
  size: 'BASE',
  layout: 'BASIC'
}
