import React, { forwardRef } from 'react'
import { media, vw } from '@/styles/Mixin'

import styled from 'styled-components'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { ...rest } = props

  return <View ref={ref} {...rest} />
})

const View = styled.textarea`
  width: 100%;
  background-color: ${props => props.theme.color.strong};
  border: 1px solid ${props => props.theme.border.silver};
  border-radius: 5px;

  @media (${media.desktop}) {
    padding: 8px 16px;
  }

  @media (${media.mobile}) {
    padding: ${vw(16)} ${vw(32)};
  }
`
