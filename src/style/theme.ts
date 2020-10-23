export interface Color {
  /** The desired color */
  tint: string
  /** The ideal color to be used on top of `tint` */
  contrast: string
}

/**
 * Groups tints and shades of one color, e.g. holds the dark/neutral/light
 * variation for `primary` or `base`
 */
export interface ColorSwatch {
  dark: Color
  normal: Color
  light: Color
}

export type ColorType =
  | 'accent'
  | 'primary'
  | 'base'
  | 'success'
  | 'danger'
  | 'ink'
  | 'warning'

type PartialColorSwatch = Partial<ColorSwatch>

export interface ThemeBase<CS extends PartialColorSwatch | ColorSwatch> {
  readonly color: {
    /** Used subtly to call attention to key elements */
    readonly accent: CS
    /**
     * Used throughout the app, often a tame color when compared to `accent`
     * in order to avoid overwhelming users with visual pollution.
     */
    readonly primary: CS
    /**
     * The base color that consists the foundation of the app, used mostly for
     * page backgrounds and similar basic elements.
     */
    readonly base: CS
    /**
     * Used to indicate the idea of positive results, e.g. successful responses
     * from actions.
     */
    readonly success: CS
    /**
     * Used to call the attention for possible unwanted effects, e.g. asking for
     * users permissions when deleting a file.
     */
    readonly danger: CS
    /**
     * Always in stark contrast when compared to `base`, used mostly for
     * text color. It is common for `ink` to be a reversed ColorSwatch of
     * `base`, i.e. `ink.dark === base.onDark`
     */
    readonly ink: CS
    /**
     * Used to indicate that something might not be possibly right, the difference
     * from `danger` is that `warning` can be used to indicate possible
     * possitive--but where attention is required to ensure everything is on track,
     * e.g. users have typed a weak password.
     */
    readonly warning: CS
  }
  /** CSS Family name of the fonts used in the page */
  readonly font: {
    readonly sans: string
    readonly serif: string
    readonly mono: string
    /**
     * Used on buttons, headers, and other places where we want to distinguish
     * from the base typeface used throughout the site.
     */
    readonly accent: string
  }
  readonly radius: {
    /** Used for components that requires bigger radius, like cards, modals, etc. */
    readonly big: Unit
    /** Used for general purpose components, like buttons, info-tips, toasts, etc. */
    readonly normal: Unit
    /** Used for checkboxes, inputs and other components that need smaller radius */
    readonly small: Unit
  }
}

export type Theme = ThemeBase<ColorSwatch>

type Unit = string | number
/** Transforms JavaScript numbers into CSS pixels */
const handleUnit = (num: Unit) => (typeof num === 'number' ? `${num}px` : num)

/**
 * Overwrites the default theme values with the ones given as argument,
 * ensuring backward compatibility with the previous versions of this package.
 *
 * Passing an empty theme will return the default theme for Global Underdog.
 */
export const makeTheme = ({
  color,
  font,
  radius,
}: Partial<ThemeBase<PartialColorSwatch>>): Theme => ({
  color: {
    accent: {
      dark: {
        tint: color?.accent?.dark?.tint ?? '#AA00FF',
        contrast: color?.accent?.dark?.contrast ?? '#FFF',
      },
      normal: {
        tint: color?.accent?.normal?.tint ?? '#E040FB',
        contrast: color?.accent?.normal?.contrast ?? '#FFF',
      },
      light: {
        tint: color?.accent?.light?.tint ?? '#EA80FC',
        contrast: color?.accent?.light?.contrast ?? '#4A148C',
      },
    },
    base: {
      dark: {
        tint: color?.base?.dark?.tint ?? '#EDEFF4',
        contrast: color?.base?.dark?.contrast ?? '#1E2022',
      },
      normal: {
        tint: color?.base?.normal?.tint ?? '#F2F4F9',
        contrast: color?.base?.normal?.contrast ?? '#1E2022',
      },
      light: {
        tint: color?.base?.light?.tint ?? '#FFF',
        contrast: color?.base?.light?.contrast ?? '#1E2022',
      },
    },
    danger: {
      dark: {
        tint: color?.danger?.dark?.tint ?? '#C62828',
        contrast: color?.danger?.dark?.contrast ?? '#FFEBEE',
      },
      normal: {
        tint: color?.danger?.normal?.tint ?? '#F44336',
        contrast: color?.danger?.normal?.contrast ?? '#FFEBEE',
      },
      light: {
        tint: color?.danger?.light?.tint ?? '#FFEBEE',
        contrast: color?.danger?.light?.contrast ?? '#F44336',
      },
    },
    ink: {
      dark: {
        tint: color?.ink?.dark?.tint ?? '#1E2022',
        contrast: color?.ink?.dark?.contrast ?? '#FFF',
      },
      normal: {
        tint: color?.ink?.normal?.tint ?? '#323232',
        contrast: color?.ink?.normal?.contrast ?? '#F2F4F9',
      },
      light: {
        tint: color?.ink?.light?.tint ?? '#6A7A89',
        contrast: color?.ink?.light?.contrast ?? '#EDEFF4',
      },
    },
    primary: {
      dark: {
        tint: color?.primary?.dark?.tint ?? '#003F88',
        contrast: color?.primary?.dark?.contrast ?? '#FFF',
      },
      normal: {
        tint: color?.primary?.normal?.tint ?? '#284CB2',
        contrast: color?.primary?.normal?.contrast ?? '#FFF',
      },
      light: {
        tint: color?.primary?.light?.tint ?? '#5579DE',
        contrast: color?.primary?.light?.contrast ?? '#FFF',
      },
    },
    success: {
      dark: {
        tint: color?.success?.dark?.tint ?? '#3F8800',
        contrast: color?.success?.dark?.contrast ?? '#E8F5E9',
      },
      normal: {
        tint: color?.success?.normal?.tint ?? '#8BC34A',
        contrast: color?.success?.normal?.contrast ?? '#E8F5E9',
      },
      light: {
        tint: color?.success?.light?.tint ?? '#C5DBB2',
        contrast: color?.success?.light?.contrast ?? '#3F8800',
      },
    },
    warning: {
      dark: {
        tint: color?.warning?.dark?.tint ?? '#CC5C00',
        contrast: color?.warning?.dark?.contrast ?? '#FFF8E1',
      },
      normal: {
        tint: color?.warning?.normal?.tint ?? '#E65100',
        contrast: color?.warning?.normal?.contrast ?? '#FFF8E1',
      },
      light: {
        tint: color?.warning?.light?.tint ?? '#FFE0B2',
        contrast: color?.warning?.light?.contrast ?? '#E65100',
      },
    },
  },
  font: {
    accent: font?.accent ? `"${font?.accent}", sans-serif` : 'sans-serif',
    mono: font?.mono ? `"${font?.mono}", monospace` : 'monospace',
    sans: font?.sans ? `"${font?.sans}", sans-serif` : 'sans-serif',
    serif: font?.serif ? `"${font?.serif}, serif"` : 'serif',
  },
  radius: {
    big: handleUnit(radius?.big ?? 16),
    normal: handleUnit(radius?.normal ?? 8),
    small: handleUnit(radius?.small ?? 4),
  },
})
