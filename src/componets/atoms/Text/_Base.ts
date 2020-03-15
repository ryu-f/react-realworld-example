import { media, vw } from '@/styles/Mixin'

import { COLOR } from '@/styles/Variables'
import styled from 'styled-components'

export type BaseProps = {
  size: number
  textcolor?: 'BLACK' | 'WHITE' | 'GLAY'
}

export const BaseStyle = styled.p<BaseProps>`
  color: ${({ textcolor }) => COLOR[textcolor || 'BLACK']};

  @media (${media.desktop}) {
    font-size: ${({ size }) => size}px;
  }
  @media (${media.mobile}) {
    font-size: ${({ size }) => vw(size * 2)};
  }
`
