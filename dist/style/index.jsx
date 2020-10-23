import { GlobalHTMLStyle } from './GlobalHTMLStyle';
import { GlobalTextStyle } from './GlobalTextStyle';
export * from './GlobalHTMLStyle';
export * from './GlobalTextStyle';
export * from './mediaQuery';
export * from './theme';
export var GlobalStyles = function () { return (<>
    <GlobalHTMLStyle />
    <GlobalTextStyle />
  </>); };
