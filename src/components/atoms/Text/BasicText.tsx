import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'

// type
////////////////////////////////////////////////////////////
type BasicTextProps = BaseProps

// jsx
////////////////////////////////////////////////////////////
export const BasicText: React.FC<BasicTextProps> = props => {
  const { size, textcolor, children } = props

  return (
    <BasicView size={size} textcolor={textcolor} {...props}>
      {children}
    </BasicView>
  )
}

// styled
////////////////////////////////////////////////////////////
const BasicView = BaseStyle.withComponent('p')
