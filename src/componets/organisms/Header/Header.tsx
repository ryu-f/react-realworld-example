import * as React from 'react'

import { BasicText } from '@/componets/atoms/Text'
import { Image } from '@/componets/atoms/Image'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

export const Header: React.FC = () => {
  const NavigationContent: React.FC = () => {
    return <Navigation></Navigation>
  }

  return (
    <HeaderWrapper>
      <Heading>
        <LogoImage src="/img/logo/logo.png" />
        <BasicText size={18} textcolor="BLACK">
          React Real World
        </BasicText>
      </Heading>
      <NavigationContent />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (${media.desktop}) {
    max-width: 1000px;
    margin: 0 auto;
  }
`

const Heading = styled.h1`
  display: flex;
  align-items: center;
`

const LogoImage = styled(Image)`
  width: 70px;
  height: 50px;
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`
