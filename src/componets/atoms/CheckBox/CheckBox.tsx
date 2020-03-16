import React, { forwardRef } from 'react'

import { BACKGROUND_COLOR } from '@/styles/Variables'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const CheckBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { ...rest } = props

  return (
    <>
      <View>
        <Input type="checkbox" ref={ref} {...rest} />
      </View>
    </>
  )
})

const Input = styled.input`
  display: none;
`

const View = styled.label`
  position: relative;
  display: block;

  @media (${media.desktop}) {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: ${BACKGROUND_COLOR.SKY_BLUE};
    border: none;
    border-radius: 5px;
  }

  &::after {
    position: absolute;
    top: 3px;
    left: 3px;
    display: block;
    width: 10px;
    height: 10px;
    content: '';
    background: #000;
    opacity: 0;
  }
`
