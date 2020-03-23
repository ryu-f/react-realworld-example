import * as React from 'react'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { BasicText } from '@/componets/atoms/Text'
import { Image } from '@/componets/atoms/Image'
import { Link } from 'react-router-dom'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  loggedIn: boolean
  name: string
}

export const Header: React.FC<Props> = props => {
  const { loggedIn, name } = props

  const NavigationContent: React.FC = () =>
    loggedIn ? (
      <nav>
        <NavigationList>
          <NavigationItem to="/editor">New Post</NavigationItem>
          <NavigationItem to="/settings">Settings</NavigationItem>
          <NavigationItem to={`/user/${name}`}>{name}</NavigationItem>
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
    <Wrapper>
      <Inner>
        <h1>
          <HeadingLink to="/">
            <LogoImage src="/img/logo/logo.png" />
            <BasicText size={18} textcolor="HORIZON_BLUE">
              React Real World
            </BasicText>
          </HeadingLink>
        </h1>
        <NavigationContent />
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  background-color: ${BACKGROUND_COLOR.IRON_BLACK};
  @media (${media.desktop}) {
    padding: 0 20px;
  }
`

const Inner = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${media.desktop}) {
    max-width: 1000px;
    padding: 5px 0;
    margin: 0 auto;
  }
`

const HeadingLink = styled(Link)`
  display: flex;
  align-items: center;
  @media (${media.desktop}) {
    margin-left: -17px;
  }
`

const LogoImage = styled(Image)`
  width: 60px;
  height: 40px;
`

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
`

const NavigationItem = styled(Link)`
  display: block;
`
