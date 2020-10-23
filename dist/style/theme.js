/** Transforms JavaScript numbers into CSS pixels */
var handleUnit = function (num) { return (typeof num === 'number' ? num + "px" : num); };
/**
 * Overwrites the default theme values with the ones given as argument,
 * ensuring backward compatibility with the previous versions of this package.
 *
 * Passing an empty theme will return the default theme for Global Underdog.
 */
export var makeTheme = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105;
    var color = _a.color, font = _a.font, radius = _a.radius;
    return ({
        color: {
            accent: {
                dark: {
                    tint: (_d = (_c = (_b = color === null || color === void 0 ? void 0 : color.accent) === null || _b === void 0 ? void 0 : _b.dark) === null || _c === void 0 ? void 0 : _c.tint) !== null && _d !== void 0 ? _d : '#AA00FF',
                    contrast: (_g = (_f = (_e = color === null || color === void 0 ? void 0 : color.accent) === null || _e === void 0 ? void 0 : _e.dark) === null || _f === void 0 ? void 0 : _f.contrast) !== null && _g !== void 0 ? _g : '#FFF',
                },
                normal: {
                    tint: (_k = (_j = (_h = color === null || color === void 0 ? void 0 : color.accent) === null || _h === void 0 ? void 0 : _h.normal) === null || _j === void 0 ? void 0 : _j.tint) !== null && _k !== void 0 ? _k : '#E040FB',
                    contrast: (_o = (_m = (_l = color === null || color === void 0 ? void 0 : color.accent) === null || _l === void 0 ? void 0 : _l.normal) === null || _m === void 0 ? void 0 : _m.contrast) !== null && _o !== void 0 ? _o : '#FFF',
                },
                light: {
                    tint: (_r = (_q = (_p = color === null || color === void 0 ? void 0 : color.accent) === null || _p === void 0 ? void 0 : _p.light) === null || _q === void 0 ? void 0 : _q.tint) !== null && _r !== void 0 ? _r : '#EA80FC',
                    contrast: (_u = (_t = (_s = color === null || color === void 0 ? void 0 : color.accent) === null || _s === void 0 ? void 0 : _s.light) === null || _t === void 0 ? void 0 : _t.contrast) !== null && _u !== void 0 ? _u : '#4A148C',
                },
            },
            base: {
                dark: {
                    tint: (_x = (_w = (_v = color === null || color === void 0 ? void 0 : color.base) === null || _v === void 0 ? void 0 : _v.dark) === null || _w === void 0 ? void 0 : _w.tint) !== null && _x !== void 0 ? _x : '#EDEFF4',
                    contrast: (_0 = (_z = (_y = color === null || color === void 0 ? void 0 : color.base) === null || _y === void 0 ? void 0 : _y.dark) === null || _z === void 0 ? void 0 : _z.contrast) !== null && _0 !== void 0 ? _0 : '#1E2022',
                },
                normal: {
                    tint: (_3 = (_2 = (_1 = color === null || color === void 0 ? void 0 : color.base) === null || _1 === void 0 ? void 0 : _1.normal) === null || _2 === void 0 ? void 0 : _2.tint) !== null && _3 !== void 0 ? _3 : '#F2F4F9',
                    contrast: (_6 = (_5 = (_4 = color === null || color === void 0 ? void 0 : color.base) === null || _4 === void 0 ? void 0 : _4.normal) === null || _5 === void 0 ? void 0 : _5.contrast) !== null && _6 !== void 0 ? _6 : '#1E2022',
                },
                light: {
                    tint: (_9 = (_8 = (_7 = color === null || color === void 0 ? void 0 : color.base) === null || _7 === void 0 ? void 0 : _7.light) === null || _8 === void 0 ? void 0 : _8.tint) !== null && _9 !== void 0 ? _9 : '#FFF',
                    contrast: (_12 = (_11 = (_10 = color === null || color === void 0 ? void 0 : color.base) === null || _10 === void 0 ? void 0 : _10.light) === null || _11 === void 0 ? void 0 : _11.contrast) !== null && _12 !== void 0 ? _12 : '#1E2022',
                },
            },
            danger: {
                dark: {
                    tint: (_15 = (_14 = (_13 = color === null || color === void 0 ? void 0 : color.danger) === null || _13 === void 0 ? void 0 : _13.dark) === null || _14 === void 0 ? void 0 : _14.tint) !== null && _15 !== void 0 ? _15 : '#C62828',
                    contrast: (_18 = (_17 = (_16 = color === null || color === void 0 ? void 0 : color.danger) === null || _16 === void 0 ? void 0 : _16.dark) === null || _17 === void 0 ? void 0 : _17.contrast) !== null && _18 !== void 0 ? _18 : '#FFEBEE',
                },
                normal: {
                    tint: (_21 = (_20 = (_19 = color === null || color === void 0 ? void 0 : color.danger) === null || _19 === void 0 ? void 0 : _19.normal) === null || _20 === void 0 ? void 0 : _20.tint) !== null && _21 !== void 0 ? _21 : '#F44336',
                    contrast: (_24 = (_23 = (_22 = color === null || color === void 0 ? void 0 : color.danger) === null || _22 === void 0 ? void 0 : _22.normal) === null || _23 === void 0 ? void 0 : _23.contrast) !== null && _24 !== void 0 ? _24 : '#FFEBEE',
                },
                light: {
                    tint: (_27 = (_26 = (_25 = color === null || color === void 0 ? void 0 : color.danger) === null || _25 === void 0 ? void 0 : _25.light) === null || _26 === void 0 ? void 0 : _26.tint) !== null && _27 !== void 0 ? _27 : '#FFEBEE',
                    contrast: (_30 = (_29 = (_28 = color === null || color === void 0 ? void 0 : color.danger) === null || _28 === void 0 ? void 0 : _28.light) === null || _29 === void 0 ? void 0 : _29.contrast) !== null && _30 !== void 0 ? _30 : '#F44336',
                },
            },
            ink: {
                dark: {
                    tint: (_33 = (_32 = (_31 = color === null || color === void 0 ? void 0 : color.ink) === null || _31 === void 0 ? void 0 : _31.dark) === null || _32 === void 0 ? void 0 : _32.tint) !== null && _33 !== void 0 ? _33 : '#1E2022',
                    contrast: (_36 = (_35 = (_34 = color === null || color === void 0 ? void 0 : color.ink) === null || _34 === void 0 ? void 0 : _34.dark) === null || _35 === void 0 ? void 0 : _35.contrast) !== null && _36 !== void 0 ? _36 : '#FFF',
                },
                normal: {
                    tint: (_39 = (_38 = (_37 = color === null || color === void 0 ? void 0 : color.ink) === null || _37 === void 0 ? void 0 : _37.normal) === null || _38 === void 0 ? void 0 : _38.tint) !== null && _39 !== void 0 ? _39 : '#323232',
                    contrast: (_42 = (_41 = (_40 = color === null || color === void 0 ? void 0 : color.ink) === null || _40 === void 0 ? void 0 : _40.normal) === null || _41 === void 0 ? void 0 : _41.contrast) !== null && _42 !== void 0 ? _42 : '#F2F4F9',
                },
                light: {
                    tint: (_45 = (_44 = (_43 = color === null || color === void 0 ? void 0 : color.ink) === null || _43 === void 0 ? void 0 : _43.light) === null || _44 === void 0 ? void 0 : _44.tint) !== null && _45 !== void 0 ? _45 : '#6A7A89',
                    contrast: (_48 = (_47 = (_46 = color === null || color === void 0 ? void 0 : color.ink) === null || _46 === void 0 ? void 0 : _46.light) === null || _47 === void 0 ? void 0 : _47.contrast) !== null && _48 !== void 0 ? _48 : '#EDEFF4',
                },
            },
            primary: {
                dark: {
                    tint: (_51 = (_50 = (_49 = color === null || color === void 0 ? void 0 : color.primary) === null || _49 === void 0 ? void 0 : _49.dark) === null || _50 === void 0 ? void 0 : _50.tint) !== null && _51 !== void 0 ? _51 : '#003F88',
                    contrast: (_54 = (_53 = (_52 = color === null || color === void 0 ? void 0 : color.primary) === null || _52 === void 0 ? void 0 : _52.dark) === null || _53 === void 0 ? void 0 : _53.contrast) !== null && _54 !== void 0 ? _54 : '#FFF',
                },
                normal: {
                    tint: (_57 = (_56 = (_55 = color === null || color === void 0 ? void 0 : color.primary) === null || _55 === void 0 ? void 0 : _55.normal) === null || _56 === void 0 ? void 0 : _56.tint) !== null && _57 !== void 0 ? _57 : '#284CB2',
                    contrast: (_60 = (_59 = (_58 = color === null || color === void 0 ? void 0 : color.primary) === null || _58 === void 0 ? void 0 : _58.normal) === null || _59 === void 0 ? void 0 : _59.contrast) !== null && _60 !== void 0 ? _60 : '#FFF',
                },
                light: {
                    tint: (_63 = (_62 = (_61 = color === null || color === void 0 ? void 0 : color.primary) === null || _61 === void 0 ? void 0 : _61.light) === null || _62 === void 0 ? void 0 : _62.tint) !== null && _63 !== void 0 ? _63 : '#5579DE',
                    contrast: (_66 = (_65 = (_64 = color === null || color === void 0 ? void 0 : color.primary) === null || _64 === void 0 ? void 0 : _64.light) === null || _65 === void 0 ? void 0 : _65.contrast) !== null && _66 !== void 0 ? _66 : '#FFF',
                },
            },
            success: {
                dark: {
                    tint: (_69 = (_68 = (_67 = color === null || color === void 0 ? void 0 : color.success) === null || _67 === void 0 ? void 0 : _67.dark) === null || _68 === void 0 ? void 0 : _68.tint) !== null && _69 !== void 0 ? _69 : '#3F8800',
                    contrast: (_72 = (_71 = (_70 = color === null || color === void 0 ? void 0 : color.success) === null || _70 === void 0 ? void 0 : _70.dark) === null || _71 === void 0 ? void 0 : _71.contrast) !== null && _72 !== void 0 ? _72 : '#E8F5E9',
                },
                normal: {
                    tint: (_75 = (_74 = (_73 = color === null || color === void 0 ? void 0 : color.success) === null || _73 === void 0 ? void 0 : _73.normal) === null || _74 === void 0 ? void 0 : _74.tint) !== null && _75 !== void 0 ? _75 : '#8BC34A',
                    contrast: (_78 = (_77 = (_76 = color === null || color === void 0 ? void 0 : color.success) === null || _76 === void 0 ? void 0 : _76.normal) === null || _77 === void 0 ? void 0 : _77.contrast) !== null && _78 !== void 0 ? _78 : '#E8F5E9',
                },
                light: {
                    tint: (_81 = (_80 = (_79 = color === null || color === void 0 ? void 0 : color.success) === null || _79 === void 0 ? void 0 : _79.light) === null || _80 === void 0 ? void 0 : _80.tint) !== null && _81 !== void 0 ? _81 : '#C5DBB2',
                    contrast: (_84 = (_83 = (_82 = color === null || color === void 0 ? void 0 : color.success) === null || _82 === void 0 ? void 0 : _82.light) === null || _83 === void 0 ? void 0 : _83.contrast) !== null && _84 !== void 0 ? _84 : '#3F8800',
                },
            },
            warning: {
                dark: {
                    tint: (_87 = (_86 = (_85 = color === null || color === void 0 ? void 0 : color.warning) === null || _85 === void 0 ? void 0 : _85.dark) === null || _86 === void 0 ? void 0 : _86.tint) !== null && _87 !== void 0 ? _87 : '#CC5C00',
                    contrast: (_90 = (_89 = (_88 = color === null || color === void 0 ? void 0 : color.warning) === null || _88 === void 0 ? void 0 : _88.dark) === null || _89 === void 0 ? void 0 : _89.contrast) !== null && _90 !== void 0 ? _90 : '#FFF8E1',
                },
                normal: {
                    tint: (_93 = (_92 = (_91 = color === null || color === void 0 ? void 0 : color.warning) === null || _91 === void 0 ? void 0 : _91.normal) === null || _92 === void 0 ? void 0 : _92.tint) !== null && _93 !== void 0 ? _93 : '#E65100',
                    contrast: (_96 = (_95 = (_94 = color === null || color === void 0 ? void 0 : color.warning) === null || _94 === void 0 ? void 0 : _94.normal) === null || _95 === void 0 ? void 0 : _95.contrast) !== null && _96 !== void 0 ? _96 : '#FFF8E1',
                },
                light: {
                    tint: (_99 = (_98 = (_97 = color === null || color === void 0 ? void 0 : color.warning) === null || _97 === void 0 ? void 0 : _97.light) === null || _98 === void 0 ? void 0 : _98.tint) !== null && _99 !== void 0 ? _99 : '#FFE0B2',
                    contrast: (_102 = (_101 = (_100 = color === null || color === void 0 ? void 0 : color.warning) === null || _100 === void 0 ? void 0 : _100.light) === null || _101 === void 0 ? void 0 : _101.contrast) !== null && _102 !== void 0 ? _102 : '#E65100',
                },
            },
        },
        font: {
            accent: (font === null || font === void 0 ? void 0 : font.accent) ? "\"" + (font === null || font === void 0 ? void 0 : font.accent) + "\", sans-serif" : 'sans-serif',
            mono: (font === null || font === void 0 ? void 0 : font.mono) ? "\"" + (font === null || font === void 0 ? void 0 : font.mono) + "\", monospace" : 'monospace',
            sans: (font === null || font === void 0 ? void 0 : font.sans) ? "\"" + (font === null || font === void 0 ? void 0 : font.sans) + "\", sans-serif" : 'sans-serif',
            serif: (font === null || font === void 0 ? void 0 : font.serif) ? "\"" + (font === null || font === void 0 ? void 0 : font.serif) + ", serif\"" : 'serif',
        },
        radius: {
            big: handleUnit((_103 = radius === null || radius === void 0 ? void 0 : radius.big) !== null && _103 !== void 0 ? _103 : 16),
            normal: handleUnit((_104 = radius === null || radius === void 0 ? void 0 : radius.normal) !== null && _104 !== void 0 ? _104 : 8),
            small: handleUnit((_105 = radius === null || radius === void 0 ? void 0 : radius.small) !== null && _105 !== void 0 ? _105 : 4),
        },
    });
};
