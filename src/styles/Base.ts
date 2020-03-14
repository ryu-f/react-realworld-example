import { BACKGROUND_COLOR } from './Constants'
import { css } from 'styled-components'

export const Base = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Ubuntu',
      'Hiragino Sans', 'Yu Gothic UI', 'Meiryo UI', 'Hiragino Kaku Gothic ProN', sans-serif;
    word-break: break-all;
    background-color: ${BACKGROUND_COLOR.GLAY};
  }
`
