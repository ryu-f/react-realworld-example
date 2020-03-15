import * as React from 'react'

import { BaseProps, BaseStyle } from './_Base'

// type
////////////////////////////////////////////////////////////
export interface AnchorButtonProps
  extends BaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

// jsx
////////////////////////////////////////////////////////////
export const AnchorButton: React.FC<AnchorButtonProps> = props => {
  const { href, size, layout, children } = props

  return (
    <AnchorView href={href} size={size} layout={layout} {...props}>
      {children}
    </AnchorView>
  )
}

// styled
////////////////////////////////////////////////////////////
const AnchorView = BaseStyle.withComponent('a')
