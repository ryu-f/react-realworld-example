import { BACKGROUND_COLOR } from '@/styles/Variables'
import { css } from 'styled-components'

export const Base = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Ubuntu',
      'Hiragino Sans', 'Yu Gothic UI', 'Meiryo UI', 'Hiragino Kaku Gothic ProN', sans-serif;
    word-break: break-all;
    background-color: ${BACKGROUND_COLOR.BRIGHT_GLAY};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  button,
  textarea,
  select {
    appearance: none;
  }

  li {
    list-style-type: none;
  }
`
