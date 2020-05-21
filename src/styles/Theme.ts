/**
 * Base color
 */
const baseColor = {
  black: '#0d0d0d',
  skyBlue: '#7ebcf2',
  horizonBlue: '#5ed7f2',
  white: '#fff',
  silver: '#ccc',
  gray: '#818a91',
  brightGray: '#f7f7f7',
  ironBlack: '#20232a',
  darkGray: '#282c34',
  whiteGray: '#e5e5e5',
  red: '#cd3d64'
}

export const lightTheme = {
  /**
   * Text color
   */
  color: {
    base: baseColor.black,
    strong: baseColor.white,
    warning: baseColor.red,
    horizonBlue: baseColor.horizonBlue,
    gray: baseColor.gray,
    darkGray: baseColor.darkGray
  },

  /**
   * Backgruond color
   */
  background: {
    base: baseColor.white,
    overAll: baseColor.brightGray,
    red: baseColor.red,
    silver: baseColor.silver,
    gray: baseColor.gray,
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
    white: baseColor.white,
    red: baseColor.red,
    silver: baseColor.silver,
    whiteGray: baseColor.whiteGray,
    horizonBlue: baseColor.horizonBlue
  }
} as const

export type AppTheme = typeof lightTheme

export const darkTheme: AppTheme = {
  /**
   * Text color
   */
  color: {
    base: baseColor.white,
    strong: baseColor.black,
    warning: baseColor.red,
    horizonBlue: baseColor.horizonBlue,
    gray: baseColor.gray,
    darkGray: baseColor.darkGray
  },

  /**
   * Backgruond color
   */
  background: {
    base: baseColor.white,
    overAll: baseColor.black,
    red: baseColor.red,
    silver: baseColor.silver,
    gray: baseColor.gray,
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
    white: baseColor.white,
    red: baseColor.red,
    silver: baseColor.silver,
    whiteGray: baseColor.whiteGray,
    horizonBlue: baseColor.horizonBlue
  }
} as const
