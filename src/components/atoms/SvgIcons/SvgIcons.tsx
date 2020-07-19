import * as React from 'react'

import styled from 'styled-components'
import { icons } from './_constance'

interface Props extends React.SVGAttributes<SVGElement> {
  id: typeof icons[number]
}

export const SvgIcons: React.FC<Props> = props => {
  const { id } = props

  return (
    <View {...props}>
      <use xlinkHref={`/img/icon/icons.svg#${id}`}></use>
    </View>
  )
}

const View = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
`
