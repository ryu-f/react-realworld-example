import React, { ComponentProps } from 'react'

import styled from 'styled-components'
import { BasicButton } from '@/components/atoms/Button'
import { SvgIcons } from '@/components/atoms/SvgIcons'

type Props = ComponentProps<typeof BasicButton>

export const FavoriteButton: React.FC<Props> = props => {
  const { children } = props
  return (
    <View {...props}>
      <SvgIcons id="heart" />
      {children}
    </View>
  )
}

const View = styled(BasicButton)`
  position: relative;
`
