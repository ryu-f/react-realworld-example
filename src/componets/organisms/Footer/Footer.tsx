import * as React from 'react'

import { media, vw } from '@/styles/Mixin'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { SvgIcons } from '@/componets/atoms/SvgIcons'
import styled from 'styled-components'

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Link href="https://github.com/ryu-f/react-realworld-example" target="_blank">
        <SvgIcons fill="#fff" stroke="#fff" id="github" />
      </Link>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${BACKGROUND_COLOR.IRON_BLACK};

  @media (${media.desktop}) {
    padding: 10px 20px;
  }

  @media (${media.mobile}) {
    padding: ${vw(20)} ${vw(40)};
  }
`

const Link = styled.a`
  position: relative;
  display: block;

  @media (${media.desktop}) {
    width: 35px;
    height: 35px;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (${media.mobile}) {
    width: ${vw(70)};
    height: ${vw(70)};
  }
`
