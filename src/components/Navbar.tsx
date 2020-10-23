import { css, Global, InterpolationWithTheme } from '@emotion/core'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import Link from 'next/link'
import { ReactElement, useState } from 'react'
import { ColorType, mediaQuery, Theme } from '../style'
import { Container } from './Container'
import { Button } from './Button'

const globalVariables = (links: number) => css`
  /*
  Declaring these as CSS variables since they change according to devices'
  breakpoints.
  */
  :root {
    --navbarHeight: 56px;
    --navbarLinkHeight: 56px;
    --navbarExpandedHeight: calc(
      var(--navbarHeight) + (${links} * var(--navbarLinkHeight))
    );
  }
  ${mediaQuery.medium} {
    :root {
      --navbarHeight: 68px;
      --navbarExpandedHeight: var(--navbarHeight);
    }
  }
`

const Wrapper = styled.div<{ expanded: boolean }, Theme>`
  width: 100%;
  height: var(
    ${(p) => (p.expanded ? '--navbarExpandedHeight' : '--navbarHeight')}
  );
  position: absolute;
  top: 0;
  left: 0;

  color: ${(p) => p.theme.color.ink.dark.tint};
  background-color: ${(p) => p.theme.color.base.light.tint};
  box-shadow: ${(p) => (p.expanded ? '0 2px 2px #0003' : 'none')};
  transition: ease 0.3s;

  /* Ensures it is on top of all content */
  z-index: 999;
`

interface StyledContainerProps {
  expanded: boolean
  theme: Theme
}
const StyledContainer = styled(Container)<StyledContainerProps>`
  display: flex;
  align-items: center;

  ${mediaQuery.small} {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  height: 100%;
  .logo {
    font-family: ${(p) => p.theme.font.accent};
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;
    color: ${(p) => p.theme.color.primary.normal.tint};
    ${mediaQuery.small} {
      width: calc(100% - var(--navbarHeight));
    }
  }

  .toggleNavLinks {
    width: var(--navbarHeight);
    height: var(--navbarHeight);
    font-size: 18px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:focus {
      outline: none;
    }

    background: none;
    border: none;
    color: ${({ expanded, theme }) =>
      expanded ? theme.color.primary.normal.tint : theme.color.ink.light.tint};
    transition: color ease 0.3s;
    ${mediaQuery.medium} {
      display: none;
    }
  }

  .links {
    display: flex;
    align-items: center;

    & > a {
      font-size: 16px;
      text-decoration: none;
      color: ${(p) => p.theme.color.ink.normal.tint};
      &:hover {
        color: ${(p) => p.theme.color.primary.normal.tint};
      }
      transition: color ease 0.2s;
      ${mediaQuery.small} {
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        margin: 0;
      }
      ${mediaQuery.medium} {
        margin-right: 25px;
      }

      &.bold {
        font-weight: 700;
      }
    }

    ${mediaQuery.small} {
      width: 100%;
      height: calc(var(--navbarExpandedHeight) - var(--navbarHeight));
      padding: 0;
      margin: 0;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      opacity: ${(p) => (p.expanded ? 1 : 0)};
      pointer-events: ${(p) => (p.expanded ? 'visible' : 'none')};
      /*
      The animation is faster when showing the menu in order for the text
      to render inside the wrapper.
      */
      transition: opacity ease ${(p) => (p.expanded ? '0.7s' : '0.15s')};
    }

    ${mediaQuery.medium} {
      flex: 4;
      justify-content: flex-end;
    }
  }
`

interface NavLinkProps {
  href: string
  label: string
  button?: boolean
  color?: ColorType
  setExpanded: (_: boolean) => void
}
const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  button,
  color,
  setExpanded,
}) => {
  const theme = useTheme<Theme>()
  return (
    <Link href={href} passHref={true}>
      {button ? (
        <Button color={color} onClick={() => setExpanded(false)}>
          {label}
        </Button>
      ) : (
        <a
          onClick={() => setExpanded(false)}
          style={{ color: color ? theme.color[color].normal.tint : undefined }}
        >
          {label}
        </a>
      )}
    </Link>
  )
}

interface Props {
  links: NavLinkProps[]
  logo: ReactElement
  navCSS: InterpolationWithTheme<any>
}

export const Navbar: React.FC<Props> = ({ links, logo, navCSS }) => {
  const [expanded, setExpanded] = useState(false)

  // Declaring all links here so we can use Array.length for CSS heights,
  // note that in this case Preact doesn't need `key` prop in components.
  const mappedLinks = links.map(
    ({ href, label, setExpanded, color, button }) => (
      <NavLink
        href={href}
        label={label}
        setExpanded={setExpanded}
        color={color}
        button={button}
      />
    )
  )

  return (
    <>
      <Global styles={globalVariables(links.length)} />
      <Wrapper expanded={expanded} css={navCSS}>
        <StyledContainer expanded={expanded}>
          {logo}

          <button
            className='toggleNavLinks'
            onClick={() => setExpanded(!expanded)}
          >
            <i className='fa fa-menu' />
          </button>

          <div className='links'>{mappedLinks}</div>
        </StyledContainer>
      </Wrapper>
    </>
  )
}
