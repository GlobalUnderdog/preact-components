const minWidth = (px: number) => `(min-width: ${px}px)`
const maxWidth = (px: number) => `(max-width: ${px}px)`
const media = '@media screen and'

export const mediaQuery = {
  /**
   * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
   */
  small: `${media} ${maxWidth(767)}`,
  /**
   * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
   * for mobile devices).
   */
  smallLandscape: `${media} ${maxWidth(767)} and (orientation: landscape)`,

  /**
   * Matches all devices from 768px (tablets and desktops)
   */
  medium: `${media} ${minWidth(768)}`,
  /**
   * Matches only devices from 768px to 991px (tablets)
   */
  mediumOnly: `${media} ${minWidth(768)} and ${maxWidth(991)}`,

  /**
   * Matches desktops and wide tablets
   */
  large: `${media} ${minWidth(992)}`,
} as const
