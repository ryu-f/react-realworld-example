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
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.horizonBlue};

    @media (${media.desktop}) {
      transition: background 0.3s;

      &:hover {
        background-color: ${props => props.theme.background.skyBlue};
      }
    }
  `,
  WARNING: css`
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.background.red};

    @media (${media.desktop}) {
      transition: background 0.3s;

      &:hover {
        background-color: ${props => props.theme.background.red};
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
