import * as React from 'react'

import { select, withKnobs } from '@storybook/addon-knobs'

import { SvgIcons } from './'
import styled from 'styled-components'

export default {
  title: 'atoms|SvgIcons',
  component: SvgIcons,
  decorators: [withKnobs]
}

export const Basic = () => {
  const options = ['clock', 'edit', 'github', 'heart', 'in', 'unlock', 'person']
  const id = select('id', options, 'github') as 'github'

  return (
    <Wrapper>
      <SvgIcons id={id} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`
