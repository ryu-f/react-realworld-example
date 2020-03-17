import { media, vw } from '@/styles/Mixin'

import { COLOR } from '@/styles/Variables'
import styled from 'styled-components'

export type BaseProps = {
  size: number
  weight?: string | number
  align?: string
  lineHeight?: number
  textcolor?: 'BLACK' | 'WHITE' | 'GLAY' | 'DARK_GLAY' | 'RED' | 'HORIZON_BLUE'
}

export const BaseStyle = styled.p<BaseProps>`
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ textcolor }) => COLOR[textcolor || 'BLACK']};
  text-align: ${({ align }) => align};

  @media (${media.desktop}) {
    font-size: ${({ size }) => size}px;
  }
  @media (${media.mobile}) {
    font-size: ${({ size }) => vw(size * 2)};
  }
`
