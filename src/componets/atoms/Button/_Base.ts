import { BACKGROUND_COLOR, COLOR } from '@/styles/Variables'
import { media, vw } from '@/styles/Mixin'
import styled, { css } from 'styled-components'

// types
////////////////////////////////////////////////////////////
export type BaseProps = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  layout?: 'BASIC'
}

const THEME = {
  BASIC: css`
    color: ${COLOR.WHITE};
    background-color: ${BACKGROUND_COLOR.HORIZON_BLUE};
  `
}

const SIZE = {
  SMALL: 12,
  BASE: 14,
  LARGE: 16
}

export const BaseStyle = styled.button<BaseProps>`
  border: none;
  border-radius: 5px;
  ${({ layout }) => THEME[layout || 'BASIC']}

  @media (${media.desktop}) {
    padding: 8px 16px;
    font-size: ${({ size }) => SIZE[size]}px;
    cursor: pointer;
  }
  @media (${media.mobile}) {
    font-size: ${({ size }) => vw(SIZE[size] * 2)};
  }
`
