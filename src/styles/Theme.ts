/**
 * Base color
 */
const baseColor = {
  black: '#0d0d0d',
  skyBlue: '#7ebcf2',
  horizonBlue: '#5ed7f2',
  whiet: '#fff',
  silver: '#ccc',
  gray: '#818a91',
  brightGray: '#f7f7f7',
  ironBlack: '#20232a',
  darkGray: '#282c34',
  whiteGray: '#e5e5e5',
  red: '#cd3d64'
}

export const theme = {
  /**
   * Text color
   */
  color: {
    black: baseColor.black,
    white: baseColor.whiet,
    red: baseColor.red,
    horizonBlue: baseColor.horizonBlue,
    gray: baseColor.gray,
    darkGray: baseColor.darkGray
  },

  /**
   * Backgruond color
   */
  background: {
    white: baseColor.whiet,
    red: baseColor.red,
    silver: baseColor.silver,
    gray: baseColor.gray,
    brightGray: baseColor.brightGray,
    darkGray: baseColor.darkGray,
    whiteGray: baseColor.whiteGray,
    ironBlack: baseColor.ironBlack,
    skyBlue: baseColor.skyBlue,
    horizonBlue: baseColor.horizonBlue
  },

  /**
   * Border color
   */
  border: {
    white: baseColor.whiet,
    red: baseColor.red,
    silver: baseColor.silver,
    whiteGray: baseColor.whiteGray,
    horizonBlue: baseColor.horizonBlue
  }
} as const

export type AppTheme = typeof theme
