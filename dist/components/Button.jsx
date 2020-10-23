var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '@emotion/styled';
import ReactGA from 'react-ga';
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 44px;\n  min-width: 108px;\n  padding: 0 12px;\n\n  font-family: ", ";\n  font-variation-settings: 'wght' 500;\n  /*\n  Setting weight for browsers that do not support font variation, since\n  we load only 400 and 700 from Google. This is the only place where we\n  use 500 for Rubik (font family) weight, so loading a additional file\n  just for buttons seems unnecessary.\n  */\n  font-weight: 700;\n  font-size: 16px;\n\n  /* Colors */\n  background: none;\n  border: none;\n  color: ", ";\n  background-color: ", ";\n  transition: background-color ease 0.3s;\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  border-radius: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"], ["\n  height: 44px;\n  min-width: 108px;\n  padding: 0 12px;\n\n  font-family: ", ";\n  font-variation-settings: 'wght' 500;\n  /*\n  Setting weight for browsers that do not support font variation, since\n  we load only 400 and 700 from Google. This is the only place where we\n  use 500 for Rubik (font family) weight, so loading a additional file\n  just for buttons seems unnecessary.\n  */\n  font-weight: 700;\n  font-size: 16px;\n\n  /* Colors */\n  background: none;\n  border: none;\n  color: ",
    ";\n  background-color: ",
    ";\n  transition: background-color ease 0.3s;\n  &:hover {\n    cursor: pointer;\n    background-color: ",
    ";\n  }\n\n  border-radius: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"])), function (p) { return p.theme.font.accent; }, function (_a) {
    var color = _a.color, theme = _a.theme;
    switch (color) {
        case 'primary':
            return theme.color.primary.normal.contrast;
        default:
            return theme.color.ink.normal.tint;
    }
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    switch (color) {
        case undefined:
        case 'base':
            return theme.color.primary.light.tint;
        default:
            return theme.color[color].dark.contrast;
    }
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    switch (color) {
        case undefined:
        case 'base':
            return theme.color.primary.light.tint;
        default:
            return theme.color[color].dark.contrast;
    }
}, function (p) { return p.theme.radius.normal; });
export var Button = function (props) {
    return (<StyledButton {...props} onClick={function (event) {
        if (props.analyticsTrack) {
            var _a = props.analyticsTrack, category = _a.category, action = _a.action, label = _a.label;
            ReactGA.event({
                category: category !== null && category !== void 0 ? category : 'Button Click',
                action: action,
                label: label,
            });
        }
        if (props.onClick)
            props.onClick(event);
    }}>
      {props.children}
    </StyledButton>);
};
var templateObject_1;
