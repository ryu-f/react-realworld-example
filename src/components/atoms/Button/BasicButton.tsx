import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'

// type
////////////////////////////////////////////////////////////
export interface BasicButtonProps extends BaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

// jsx
////////////////////////////////////////////////////////////
export const BasicButton: React.FC<BasicButtonProps> = props => {
  const { layout, children } = props

  return (
    <BasicView layout={layout} {...props}>
      {children}
    </BasicView>
  )
}

// styled
////////////////////////////////////////////////////////////
const BasicView = BaseStyle.withComponent('button')
