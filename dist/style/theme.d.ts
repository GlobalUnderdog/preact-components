export interface Color {
    /** The desired color */
    tint: string;
    /** The ideal color to be used on top of `tint` */
    contrast: string;
}
/**
 * Groups tints and shades of one color, e.g. holds the dark/neutral/light
 * variation for `primary` or `base`
 */
export interface ColorSwatch {
    dark: Color;
    normal: Color;
    light: Color;
}
export declare type ColorType = 'accent' | 'primary' | 'base' | 'success' | 'danger' | 'ink' | 'warning';
declare type PartialColorSwatch = Partial<ColorSwatch>;
export interface ThemeBase<CS extends PartialColorSwatch | ColorSwatch> {
    readonly color: {
        /** Used subtly to call attention to key elements */
        readonly accent: CS;
        /**
         * Used throughout the app, often a tame color when compared to `accent`
         * in order to avoid overwhelming users with visual pollution.
         */
        readonly primary: CS;
        /**
         * The base color that consists the foundation of the app, used mostly for
         * page backgrounds and similar basic elements.
         */
        readonly base: CS;
        /**
         * Used to indicate the idea of positive results, e.g. successful responses
         * from actions.
         */
        readonly success: CS;
        /**
         * Used to call the attention for possible unwanted effects, e.g. asking for
         * users permissions when deleting a file.
         */
        readonly danger: CS;
        /**
         * Always in stark contrast when compared to `base`, used mostly for
         * text color. It is common for `ink` to be a reversed ColorSwatch of
         * `base`, i.e. `ink.dark === base.onDark`
         */
        readonly ink: CS;
        /**
         * Used to indicate that something might not be possibly right, the difference
         * from `danger` is that `warning` can be used to indicate possible
         * possitive--but where attention is required to ensure everything is on track,
         * e.g. users have typed a weak password.
         */
        readonly warning: CS;
    };
    /** CSS Family name of the fonts used in the page */
    readonly font: {
        readonly sans: string;
        readonly serif: string;
        readonly mono: string;
        /**
         * Used on buttons, headers, and other places where we want to distinguish
         * from the base typeface used throughout the site.
         */
        readonly accent: string;
    };
    readonly radius: {
        /** Used for components that requires bigger radius, like cards, modals, etc. */
        readonly big: Unit;
        /** Used for general purpose components, like buttons, info-tips, toasts, etc. */
        readonly normal: Unit;
        /** Used for checkboxes, inputs and other components that need smaller radius */
        readonly small: Unit;
    };
}
export declare type Theme = ThemeBase<ColorSwatch>;
declare type Unit = string | number;
/**
 * Overwrites the default theme values with the ones given as argument,
 * ensuring backward compatibility with the previous versions of this package.
 *
 * Passing an empty theme will return the default theme for Global Underdog.
 */
export declare const makeTheme: ({ color, font, radius, }: Partial<ThemeBase<PartialColorSwatch>>) => Theme;
export {};
