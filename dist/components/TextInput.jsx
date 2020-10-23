var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '@emotion/styled';
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var StyledInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 44px;\n  border: none;\n  border-radius: ", ";\n  border: 2px solid ", ";\n\n  background: none;\n  background-color: ", ";\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n"], ["\n  height: 44px;\n  border: none;\n  border-radius: ", ";\n  border: 2px solid ", ";\n\n  background: none;\n  background-color: ", ";\n\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n"])), function (p) { return p.theme.radius.small; }, function (p) { return p.theme.color.primary.light.tint; }, function (p) { return p.theme.color.base.light.tint; }, function (p) { return p.theme.color.primary.normal.tint; });
var StyledLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n  margin: 4px 0 25px;\n"], ["\n  color: ", ";\n  font-size: 16px;\n  margin: 4px 0 25px;\n"])), function (p) { return p.theme.color.primary.normal.tint; });
export var TextInput = function (props) {
    var label = props.label, id = props.id;
    return (<Wrapper>
      <StyledInput {...props}/>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    </Wrapper>);
};
TextInput.defaultProps = { type: 'text' };
var templateObject_1, templateObject_2, templateObject_3;
