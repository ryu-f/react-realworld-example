import * as React from 'react'

import { BasicText } from './'

export default {
  title: 'atoms|Text',
  component: Text
}

type Props = React.ComponentProps<typeof BasicText>

export const Basic = (args: Props) => {
  return <BasicText {...args}>Basic</BasicText>
}
