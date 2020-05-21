import React, { forwardRef } from 'react'
import { media, vw } from '@/styles/Mixin'

import styled from 'styled-components'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const CheckBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children, ...rest } = props

  return (
    <Label>
      <Input type="checkbox" ref={ref} {...rest} />
      <View>{children}</View>
    </Label>
  )
})

const Label = styled.label`
  width: 100%;
`

const View = styled.span`
  position: relative;
  display: inline-block;
  line-height: 1;

  @media (${media.desktop}) {
    padding-left: 25px;
    cursor: pointer;
  }

  @media (${media.mobile}) {
    padding-left: ${vw(50)};
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: ${props => props.theme.color.strong};
    border: 1px solid ${props => props.theme.border.silver};
    border-radius: 5px;

    @media (${media.desktop}) {
      width: 18px;
      height: 18px;
    }

    @media (${media.mobile}) {
      width: ${vw(36)};
      height: ${vw(36)};
    }
  }

  &::after {
    position: absolute;
    display: block;
    content: '';
    background: url('/img/icon/check.png') no-repeat;
    background-size: cover;
    opacity: 0;

    @media (${media.desktop}) {
      top: 1px;
      left: 1px;
      width: 15px;
      height: 15px;
    }

    @media (${media.mobile}) {
      top: ${vw(1)};
      left: ${vw(1)};
      width: ${vw(30)};
      height: ${vw(30)};
    }
  }
`

const Input = styled.input`
  display: none;

  &:checked {
    + ${View}::before {
      background-color: ${props => props.theme.color.horizonBlue};
      border: 1px solid ${props => props.theme.border.horizonBlue};
    }

    + ${View}::after {
      opacity: 1;
    }
  }
`
