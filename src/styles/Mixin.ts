import { BREAK_POINT } from './Constants'

export const vw = (size: number) => {
  const rate = 100 / BREAK_POINT.MOBILE
  return `${rate * size * 1}vw`
}

export const media = {
  desktop: `min-width: ${BREAK_POINT.MOBILE + 1}px`,
  mobile: `max-width: ${BREAK_POINT.MOBILE}px`
}
