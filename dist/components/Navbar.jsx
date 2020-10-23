var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import Link from 'next/link';
import { useState } from 'react';
import { mediaQuery } from '../style';
import { Container } from './Container';
import { Button } from './Button';
var globalVariables = function (links) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + (", " * var(--navbarLinkHeight))\n    );\n  }\n  ", " {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n"], ["\n  /*\n  Declaring these as CSS variables since they change according to devices'\n  breakpoints.\n  */\n  :root {\n    --navbarHeight: 56px;\n    --navbarLinkHeight: 56px;\n    --navbarExpandedHeight: calc(\n      var(--navbarHeight) + (", " * var(--navbarLinkHeight))\n    );\n  }\n  ", " {\n    :root {\n      --navbarHeight: 68px;\n      --navbarExpandedHeight: var(--navbarHeight);\n    }\n  }\n"])), links, mediaQuery.medium); };
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: var(\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content */\n  z-index: 999;\n"], ["\n  width: 100%;\n  height: var(\n    ", "\n  );\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transition: ease 0.3s;\n\n  /* Ensures it is on top of all content */\n  z-index: 999;\n"])), function (p) { return (p.expanded ? '--navbarExpandedHeight' : '--navbarHeight'); }, function (p) { return p.theme.color.ink.dark.tint; }, function (p) { return p.theme.color.base.light.tint; }, function (p) { return (p.expanded ? '0 2px 2px #0003' : 'none'); });
var StyledContainer = styled(Container)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  ", " {\n    flex-flow: row wrap;\n    justify-content: space-between;\n  }\n  height: 100%;\n  .logo {\n    font-family: ", ";\n    font-size: 32px;\n    font-weight: 700;\n    cursor: pointer;\n    color: ", ";\n    ", " {\n      width: calc(100% - var(--navbarHeight));\n    }\n  }\n\n  .toggleNavLinks {\n    width: var(--navbarHeight);\n    height: var(--navbarHeight);\n    font-size: 18px;\n\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    &:focus {\n      outline: none;\n    }\n\n    background: none;\n    border: none;\n    color: ", ";\n    transition: color ease 0.3s;\n    ", " {\n      display: none;\n    }\n  }\n\n  .links {\n    display: flex;\n    align-items: center;\n\n    & > a {\n      font-size: 16px;\n      text-decoration: none;\n      color: ", ";\n      &:hover {\n        color: ", ";\n      }\n      transition: color ease 0.2s;\n      ", " {\n        margin-bottom: 25px;\n        display: flex;\n        align-items: center;\n        margin: 0;\n      }\n      ", " {\n        margin-right: 25px;\n      }\n\n      &.bold {\n        font-weight: 700;\n      }\n    }\n\n    ", " {\n      width: 100%;\n      height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n      padding: 0;\n      margin: 0;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n\n      opacity: ", ";\n      pointer-events: ", ";\n      /*\n      The animation is faster when showing the menu in order for the text\n      to render inside the wrapper.\n      */\n      transition: opacity ease ", ";\n    }\n\n    ", " {\n      flex: 4;\n      justify-content: flex-end;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  ", " {\n    flex-flow: row wrap;\n    justify-content: space-between;\n  }\n  height: 100%;\n  .logo {\n    font-family: ", ";\n    font-size: 32px;\n    font-weight: 700;\n    cursor: pointer;\n    color: ", ";\n    ", " {\n      width: calc(100% - var(--navbarHeight));\n    }\n  }\n\n  .toggleNavLinks {\n    width: var(--navbarHeight);\n    height: var(--navbarHeight);\n    font-size: 18px;\n\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    &:focus {\n      outline: none;\n    }\n\n    background: none;\n    border: none;\n    color: ",
    ";\n    transition: color ease 0.3s;\n    ", " {\n      display: none;\n    }\n  }\n\n  .links {\n    display: flex;\n    align-items: center;\n\n    & > a {\n      font-size: 16px;\n      text-decoration: none;\n      color: ", ";\n      &:hover {\n        color: ", ";\n      }\n      transition: color ease 0.2s;\n      ", " {\n        margin-bottom: 25px;\n        display: flex;\n        align-items: center;\n        margin: 0;\n      }\n      ", " {\n        margin-right: 25px;\n      }\n\n      &.bold {\n        font-weight: 700;\n      }\n    }\n\n    ", " {\n      width: 100%;\n      height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));\n      padding: 0;\n      margin: 0;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n\n      opacity: ", ";\n      pointer-events: ", ";\n      /*\n      The animation is faster when showing the menu in order for the text\n      to render inside the wrapper.\n      */\n      transition: opacity ease ", ";\n    }\n\n    ", " {\n      flex: 4;\n      justify-content: flex-end;\n    }\n  }\n"])), mediaQuery.small, function (p) { return p.theme.font.accent; }, function (p) { return p.theme.color.primary.normal.tint; }, mediaQuery.small, function (_a) {
    var expanded = _a.expanded, theme = _a.theme;
    return expanded ? theme.color.primary.normal.tint : theme.color.ink.light.tint;
}, mediaQuery.medium, function (p) { return p.theme.color.ink.normal.tint; }, function (p) { return p.theme.color.primary.normal.tint; }, mediaQuery.small, mediaQuery.medium, mediaQuery.small, function (p) { return (p.expanded ? 1 : 0); }, function (p) { return (p.expanded ? 'visible' : 'none'); }, function (p) { return (p.expanded ? '0.7s' : '0.15s'); }, mediaQuery.medium);
var NavLink = function (_a) {
    var href = _a.href, label = _a.label, button = _a.button, color = _a.color, setExpanded = _a.setExpanded;
    var theme = useTheme();
    return (<Link href={href} passHref={true}>
      {button ? (<Button color={color} onClick={function () { return setExpanded(false); }}>
          {label}
        </Button>) : (<a onClick={function () { return setExpanded(false); }} style={{ color: color ? theme.color[color].normal.tint : undefined }}>
          {label}
        </a>)}
    </Link>);
};
export var Navbar = function (_a) {
    var links = _a.links, logo = _a.logo, navCSS = _a.navCSS;
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    // Declaring all links here so we can use Array.length for CSS heights,
    // note that in this case Preact doesn't need `key` prop in components.
    var mappedLinks = links.map(function (_a) {
        var href = _a.href, label = _a.label, setExpanded = _a.setExpanded, color = _a.color, button = _a.button;
        return (<NavLink href={href} label={label} setExpanded={setExpanded} color={color} button={button}/>);
    });
    return (<>
      <Global styles={globalVariables(links.length)}/>
      <Wrapper expanded={expanded} css={navCSS}>
        <StyledContainer expanded={expanded}>
          {logo}

          <button className='toggleNavLinks' onClick={function () { return setExpanded(!expanded); }}>
            <i className='fa fa-menu'/>
          </button>

          <div className='links'>{mappedLinks}</div>
        </StyledContainer>
      </Wrapper>
    </>);
};
var templateObject_1, templateObject_2, templateObject_3;
