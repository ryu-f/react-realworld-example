/**
 * Application theme color
 */
const THEME_COLOR = {
  BLACK: '#0d0d0d',
  SKY_BLUE: '#7ebcf2',
  HORIZON_BLUE: '#5ed7f2',
  NILE_GREEN: '#05f2db',
  PEER_AQUA: '#7ef2e7',
  GRADIENT:
    'linear-gradient(178.25617065509755deg, rgba(126, 188, 242,1) 2.151162790697675%,rgba(126, 188, 241,1) 2.151162790697675%,rgba(126, 242, 231,1) 92.4260042283298%)'
}

/**
 * Base color
 */
const BASE_COLOR = {
  WHIET: '#fff',
  SILVER: '#ccc',
  GLAY: '#818a91',
  DARK_GLAY: '#666',
  RED: '#cd3d64',
  ALPHA_GLAY: 'rgba(0,0,0,0.54)'
}

/**
 * Text color
 */
export const COLOR = {
  BLACK: THEME_COLOR.BLACK,
  WHITE: BASE_COLOR.WHIET,
  RED: BASE_COLOR.RED,
  GLAY: BASE_COLOR.ALPHA_GLAY,
  DARK_GLAY: BASE_COLOR.DARK_GLAY
}

/**
 * Backgruond color
 */
export const BACKGROUND_COLOR = {
  WHITE: BASE_COLOR.WHIET,
  SILVER: BASE_COLOR.SILVER,
  GLAY: BASE_COLOR.GLAY,
  SKY_BLUE: THEME_COLOR.SKY_BLUE,
  HORIZON_BLUE: THEME_COLOR.HORIZON_BLUE,
  GRADIENT: THEME_COLOR.GRADIENT
}

/**
 * Border color
 */
export const BORDER_COLOR = {
  WHITE: BASE_COLOR.WHIET,
  RED: BASE_COLOR.RED,
  SILVER: BASE_COLOR.SILVER,
  HORIZON_BLUE: THEME_COLOR.HORIZON_BLUE
}

/**
 * break point
 */

export const BREAK_POINT = {
  MOBILE: 750,
  TABLET: 1024
}
