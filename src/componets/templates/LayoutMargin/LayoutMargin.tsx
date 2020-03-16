import * as React from 'react'

import { media, vw } from '@/styles/Mixin'

import styled from 'styled-components'

export type Props = {
  top?: number
  right?: number
  bottom?: number
  left?: number
  spTop?: number
  spRight?: number
  spBottom?: number
  spLeft?: number
}

export const LayoutMargin: React.FC<Props> = props => {
  const {
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
    spTop,
    spRight,
    spBottom,
    spLeft,
    children
  } = props
  return (
    <Margin
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      spTop={spTop}
      spRight={spRight}
      spBottom={spBottom}
      spLeft={spLeft}
    >
      {children}
    </Margin>
  )
}

export const Margin = styled.div<Props>`
  @media (${media.desktop}) {
    margin-top: ${({ top }) => top}px;
    margin-right: ${({ right }) => right}px;
    margin-bottom: ${({ bottom }) => bottom}px;
    margin-left: ${({ left }) => left}px;
  }
  @media (${media.mobile}) {
    margin-top: ${({ top, spTop }) => vw(spTop || top! * 2)};
    margin-right: ${({ right, spRight }) => vw(spRight || right! * 2)};
    margin-bottom: ${({ bottom, spBottom }) => vw(spBottom || bottom! * 2)};
    margin-left: ${({ left, spLeft }) => vw(spLeft || left! * 2)};
  }
`
