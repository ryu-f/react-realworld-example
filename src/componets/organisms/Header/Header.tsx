import * as React from 'react'

import { Image } from '@/componets/atoms/Image'
import styled from 'styled-components'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Heading>
        <Image src="/img/logo/logo.png" />
      </Heading>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
`

const Heading = styled.h1`
  width: 100px;
  height: 100px;
`
