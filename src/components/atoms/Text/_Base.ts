import styled from 'styled-components'
import { media, vw } from '@/styles/Mixin'

export type BaseProps = {
  size?: number
  weight?: string | number
  align?: string
  lineHeight?: number
  textcolor?: 'base' | 'strong' | 'gray' | 'darkGray' | 'warning' | 'horizonBlue'
  fontStyle?: string
  whiteSpace?: string
}

export const BaseStyle = styled.p<BaseProps>`
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${props => props.theme.color[props.textcolor || 'base']};
  text-align: ${({ align }) => align};
  white-space: ${({ whiteSpace }) => whiteSpace};

  @media (${media.desktop}) {
    font-size: ${({ size }) => size || 14}px;
  }
  @media (${media.mobile}) {
    font-size: ${({ size }) => vw((size || 14) * 2)};
  }
`
