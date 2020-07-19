import { createGlobalStyle } from 'styled-components'
import { Base } from './Base'
import { Reset } from './Reset'
import { Transitions } from './Transitions'

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Base}
  ${Transitions}
`
