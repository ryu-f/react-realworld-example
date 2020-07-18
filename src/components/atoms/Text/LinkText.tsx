import * as React from 'react'

import { Link } from 'react-router-dom'
import { BaseProps, BaseStyle } from './_Base'

// type
////////////////////////////////////////////////////////////

interface LinkTextProps extends BaseProps {
  to: string
}

// jsx
////////////////////////////////////////////////////////////
export const LinkText: React.FC<LinkTextProps> = props => {
  const { size, textcolor, children } = props

  return (
    <LinkView size={size} textcolor={textcolor} {...props}>
      {children}
    </LinkView>
  )
}

// styled
////////////////////////////////////////////////////////////
const LinkView = BaseStyle.withComponent(Link)
