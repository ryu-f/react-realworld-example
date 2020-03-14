import { BUTTON_FONT_SIZE, COLOR } from '@/styles/Constants'
import { media, vw } from '@/styles/Mixin'

import styled from 'styled-components'

// types
////////////////////////////////////////////////////////////
export type BaseProps = {
  size: 'BASE' | 'SMALL' | 'LARGE'
  textcolor: 'BLACK' | 'WHITE'
}

export const BaseStyle = styled.button<BaseProps>`
  color: ${({ textcolor }) => COLOR[textcolor]};

  @media (${media.desktop}) {
    font-size: ${({ size }) => BUTTON_FONT_SIZE[size]}px;
  }
  @media (${media.mobile}) {
    font-size: ${({ size }) => vw(BUTTON_FONT_SIZE[size] * 2)};
  }
`
