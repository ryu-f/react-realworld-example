import * as React from 'react'

import { BACKGROUND_COLOR, COLOR } from '@/styles/Variables'
import { media, vw } from '@/styles/Mixin'

import { BasicText } from '@/components/atoms/Text'
import { Image } from '@/components/atoms/Image'
import { Link } from 'react-router-dom'
import { SvgIcons } from '@/components/atoms/SvgIcons'
import styled from 'styled-components'

type Props = {
  loggedIn: boolean
  name: string
  currentPath: string
}

export const Header: React.FC<Props> = props => {
  const { loggedIn, name, currentPath } = props

  const loggedInNavigations = [
    {
      to: '/editor',
      text: 'New Post',
      id: 'edit' as 'edit'
    },
    {
      to: '/settings',
      text: 'Settings',
      id: 'setting' as 'setting'
    },
    {
      to: `/user/${name}`,
      text: name,
      id: 'person' as 'person'
    }
  ]

  const unregistedNavigations = [
    {
      to: '/login',
      text: 'Sign In',
      id: 'unlock' as 'unlock'
    },
    {
      to: '/register',
      text: 'Sign Up',
      id: 'in' as 'in'
    }
  ]

  const NavigationContent: React.FC = () =>
    loggedIn ? (
      <nav>
        <NavigationList>
          {loggedInNavigations.map((nav, i) => (
            <li key={i}>
              <NavigationItem to={nav.to}>
                <NavigationText
                  size={16}
                  textcolor={currentPath.includes(nav.to) ? 'HORIZON_BLUE' : 'WHITE'}
                >
                  {nav.text}
                </NavigationText>
                <NavigationIcon
                  id={nav.id}
                  fill={currentPath.includes(nav.to) ? '#5ed7f2' : '#fff'}
                />
              </NavigationItem>
            </li>
          ))}
        </NavigationList>
      </nav>
    ) : (
      <nav>
        <NavigationList>
          {unregistedNavigations.map((nav, i) => (
            <li key={i}>
              <NavigationItem to={nav.to}>
                <NavigationText
                  size={16}
                  textcolor={currentPath.includes(nav.to) ? 'HORIZON_BLUE' : 'WHITE'}
                >
                  {nav.text}
                </NavigationText>
                <NavigationIcon
                  id={nav.id}
                  fill={currentPath.includes(nav.to) ? '#5ed7f2' : '#fff'}
                />
              </NavigationItem>
            </li>
          ))}
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

  @media (${media.mobile}) {
    padding: 0 ${vw(40)};
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

  @media (${media.mobile}) {
    padding: ${vw(10)} 0;
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
  @media (${media.desktop}) {
    width: 60px;
    height: 40px;
  }

  @media (${media.mobile}) {
    width: ${vw(120)};
    height: ${vw(80)};
  }
`

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
`

const NavigationText = styled(BasicText)``

const NavigationIcon = styled(SvgIcons)`
  @media (${media.desktop}) {
    top: 50%;
    left: 107%;
    width: 21px;
    height: 21px;
    transform: translateY(-50%);
  }
`

const NavigationItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;

  @media (${media.desktop}) {
    margin-left: 50px;

    &:hover {
      ${NavigationText} {
        color: ${COLOR.HORIZON_BLUE};
      }

      ${NavigationIcon} {
        fill: ${COLOR.HORIZON_BLUE};
      }
    }
  }
`
