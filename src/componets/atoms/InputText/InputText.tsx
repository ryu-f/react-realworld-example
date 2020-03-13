import React, { forwardRef } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { ...rest } = props

  return <input type="text" ref={ref} {...rest} />
})
