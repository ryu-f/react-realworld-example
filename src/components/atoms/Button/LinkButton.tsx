import * as React from 'react'

import { Link } from 'react-router-dom'
import { BaseProps, BaseStyle } from './_Base'

// type
////////////////////////////////////////////////////////////
export interface LinkButtonProps extends BaseProps {
  to: string
}

// jsx
////////////////////////////////////////////////////////////
export const LinkButton: React.FC<LinkButtonProps> = props => {
  const { layout, children } = props

  return (
    <LinkView layout={layout} {...props}>
      {children}
    </LinkView>
  )
}

// styled
////////////////////////////////////////////////////////////
const LinkView = BaseStyle.withComponent(Link)
