import * as React from 'react'

import styled from 'styled-components'
import { icons } from './_constance'
import { SvgIcons } from './'

export default {
  title: 'atoms|SvgIcons',
  component: SvgIcons
}

type Props = React.ComponentProps<typeof SvgIcons>

export const Basic = (args: Props) => {
  return (
    <Wrapper>
      <SvgIcons {...args} />
    </Wrapper>
  )
}

Basic.args = {
  id: { control: { type: 'select', options: icons } }
}

const Wrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`
