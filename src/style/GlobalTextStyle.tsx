import { css, Global } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { mediaQuery } from './mediaQuery'
import { Theme } from './theme'

const style = ({ color, font }: Theme) => css`
  /* Paragraphs & Anchors */

  /* Setting this in HTML so divs, spans and other elements benefit from these rules */
  html {
    color: ${color.ink.normal.tint};
    font-family: ${font.sans};
    font-size: 18px;
    line-height: 24px;
    ${mediaQuery.medium} {
      font-size: 20px;
      line-height: 28px;
    }
  }
  ::selection {
    background-color: ${color.primary.dark.tint};
    color: ${color.primary.dark.contrast};
  }
  :not(button) > a {
    color: ${color.primary.normal.tint};
  }

  /* Headers */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${color.ink.dark.tint};
    font-family: ${font.accent};
  }

  h1 {
    font-size: 36px;
    line-height: 42px;
    ${mediaQuery.medium} {
      font-size: 48px;
      line-height: 56px;
    }
  }
  h2 {
    font-size: 28px;
    line-height: 32px;
    ${mediaQuery.medium} {
      font-size: 32px;
      line-height: 36px;
    }
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    ${mediaQuery.medium} {
      font-size: 28px;
      line-height: 32px;
    }
  }
  h4 {
    font-size: 20px;
    line-height: 24px;
  }
  h5 {
    font-family: ${font.sans};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    color: ${color.ink.light.tint};
    letter-spacing: 0.08rem;
  }
`

export const GlobalTextStyle = () => {
  const theme = useTheme<Theme>()
  return <Global styles={style(theme)} />
}
