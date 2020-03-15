import * as React from 'react'

import { BasicText } from '@/componets/atoms/Text'
import { Image } from '@/componets/atoms/Image'
import { Link } from 'react-router-dom'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  loggedIn: boolean
}

export const Header: React.FC<Props> = props => {
  const { loggedIn } = props

  const NavigationContent: React.FC = () =>
    loggedIn ? (
      <nav>
        <NavigationList>
          <NavigationItem to="/setting">Setting</NavigationItem>
          <NavigationItem to="/profile">Profile</NavigationItem>
        </NavigationList>
      </nav>
    ) : (
      <nav>
        <NavigationList>
          <NavigationItem to="/login">Sign In</NavigationItem>
          <NavigationItem to="/register">Sign Up</NavigationItem>
        </NavigationList>
      </nav>
    )

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

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
`

const NavigationItem = styled(Link)`
  display: block;
`
