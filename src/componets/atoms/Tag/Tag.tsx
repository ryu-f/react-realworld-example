import * as React from 'react'

import { BACKGROUND_COLOR, COLOR } from '@/styles/Variables'
import { media, vw } from '@/styles/Mixin'
import styled, { css } from 'styled-components'

// types
////////////////////////////////////////////////////////////
export type Props = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  layout?: 'BASIC'
}

const SIZE = {
  SMALL: 8,
  BASE: 10,
  LARGE: 12
}

const THEME = {
  BASIC: css`
    color: ${COLOR.WHITE};
    background-color: ${BACKGROUND_COLOR.GLAY};
  `
}

export const Tag: React.FC<Props> = props => {
  const { size, layout, children } = props

  return (
    <View size={size} layout={layout}>
      {children}
    </View>
  )
}

const View = styled.span<Props>`
  display: inline-block;
  border: none;
  border-radius: 8px;
  ${({ layout }) => THEME[layout || 'BASIC']}

  @media (${media.desktop}) {
    padding: 4px 6px;
    font-size: ${({ size }) => SIZE[size]}px;
  }
  @media (${media.mobile}) {
    font-size: ${({ size }) => vw(SIZE[size] * 2)};
  }
`
