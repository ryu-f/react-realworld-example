import { BACKGROUND_COLOR, BORDER_COLOR } from '@/styles/Variables'
import React, { forwardRef } from 'react'
import { media, vw } from '@/styles/Mixin'

import styled from 'styled-components'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { ...rest } = props

  return <View type="text" ref={ref} {...rest} />
})

const View = styled.input`
  width: 100%;
  background-color: ${BACKGROUND_COLOR.WHITE};
  border: 1px solid ${BORDER_COLOR.SILVER};
  border-radius: 5px;

  @media (${media.desktop}) {
    padding: 8px 16px;
  }

  @media (${media.mobile}) {
    padding: ${vw(16)} ${vw(32)};
  }
`