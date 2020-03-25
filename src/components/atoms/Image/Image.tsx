import * as React from 'react'

import styled from 'styled-components'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
}

export const Image: React.FC<Props> = ({ src, alt = '', ...rest }) => (
  <View src={src} alt={alt} {...rest} />
)

const View = styled.img`
  max-width: 100%;
  height: auto;
`
