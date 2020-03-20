import { BACKGROUND_COLOR, COLOR } from '@/styles/Variables'
import { media, vw } from '@/styles/Mixin'
import styled, { css } from 'styled-components'

// types
////////////////////////////////////////////////////////////
export type BaseProps = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  layout?: 'BASIC' | 'WARNING'
}

const THEME = {
  BASIC: css`
    color: ${COLOR.WHITE};
    background-color: ${BACKGROUND_COLOR.HORIZON_BLUE};
    @media (${media.desktop}) {
      transition: background 0.3s;
      &:hover {
        background-color: ${BACKGROUND_COLOR.SKY_BLUE};
      }
    }
  `,
  WARNING: css`
    color: ${COLOR.WHITE};
    background-color: ${BACKGROUND_COLOR.RED};
    @media (${media.desktop}) {
      transition: background 0.3s;
      &:hover {
        background-color: ${BACKGROUND_COLOR.RED};
      }
    }
  `
}

const SIZE = {
  SMALL: 12,
  BASE: 14,
  LARGE: 16
}

export const BaseStyle = styled.button<BaseProps>`
  width: 100%;
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
