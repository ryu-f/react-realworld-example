import { css } from 'styled-components'

export const Base = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Ubuntu',
      'Hiragino Sans', 'Yu Gothic UI', 'Meiryo UI', 'Hiragino Kaku Gothic ProN', sans-serif;
    word-break: break-all;
    background-color: ${props => props.theme.background.overAll};
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
