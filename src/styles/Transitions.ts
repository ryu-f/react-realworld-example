import { css } from 'styled-components'

export const Transitions = css`
  .routing-transition-enter {
    opacity: 0;
  }

  .routing-transition-enter-active {
    opacity: 1;
    transition: opacity 0.5s;
  }
`
