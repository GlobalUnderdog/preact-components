import { css, Global } from '@emotion/core'

const style = css`
  html {
    scroll-behavior: smooth;
  }
  body {
    /*
    Sometimes, when using react-awesome-reveal we might trigger some
    unwanted horizontal spacing, creating issues like briefly showing the
    horizontal scrollbar or permanently increasing the width of the page.
    Setting width: 100% fixes this issue.
    */
    width: 100%;
    /*
    In OSes that have visible scrollbars changing to a page without too
    much content might cause components to fickle, since the scrollbar
    will show/hide according to the page's height (for example a simple
    login page will have no scrollbar). We ensure that the overflow-y is
    always scrollable so these OSes can have a consistent look & feel in
    all pages.
    */
    overflow-y: scroll;
  }

  /*
  Setting this here since icons.css is replaced with newer icons from time
  to time.
  */
  @keyframes fa-spin {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(359deg);
    }
  }
  .fa-spin {
    animation: fa-spin 2s linear forwards infinite;
  }
`

export const GlobalHTMLStyle = () => <Global styles={style} />
