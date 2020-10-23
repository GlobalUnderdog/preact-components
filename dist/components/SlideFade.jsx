var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { keyframes } from '@emotion/core';
import Reveal from 'react-awesome-reveal';
var translateDirection = function (direction, distance) {
    if (distance === void 0) { distance = '100%'; }
    switch (direction) {
        case 'up':
            return "translate3d(0, " + distance + ", 0)";
        case 'down':
            return "translate3d(0, -" + distance + ", 0)";
        case 'left':
            return "translate3d(" + distance + ", 0, 0)";
        case 'right':
            return "translate3d(-" + distance + ", 0, 0)";
    }
};
var animation = function (direction, distance) { return keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: ", ";\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"], ["\n  from {\n    transform: ", ";\n    opacity: 0;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n"])), translateDirection(direction, distance)); };
export var SlideFade = function (_a) {
    var direction = _a.direction, distance = _a.distance, props = __rest(_a, ["direction", "distance"]);
    return (<Reveal {...props} keyframes={animation(direction !== null && direction !== void 0 ? direction : 'left', distance !== null && distance !== void 0 ? distance : '100%')}/>);
};
var templateObject_1;
