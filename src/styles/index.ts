import { Base } from './Base'
import { Reset } from './Reset'
import { Transitions } from './Transitions'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Base}
  ${Transitions}
`
