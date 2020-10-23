import styled from '@emotion/styled'
import ReactGA from 'react-ga'
import { FC, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { ColorType, Theme } from '../style'

interface Props {
  /** If no color is set, defaults to use base.light as background */
  color?: ColorType
  // Not using the type from ReactGA since it has a lot of fields we don't
  // want
  analyticsTrack?: {
    /** Will default to 'Button Click' */
    category?: string
    action: string
    label?: string
  }
}

const StyledButton = styled.button<Props, Theme>`
  height: 44px;
  min-width: 108px;
  padding: 0 12px;

  font-family: ${(p) => p.theme.font.accent};
  font-variation-settings: 'wght' 500;
  /*
  Setting weight for browsers that do not support font variation, since
  we load only 400 and 700 from Google. This is the only place where we
  use 500 for Rubik (font family) weight, so loading a additional file
  just for buttons seems unnecessary.
  */
  font-weight: 700;
  font-size: 16px;

  /* Colors */
  background: none;
  border: none;
  color: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.color.primary.normal.contrast
      default:
        return theme.color.ink.normal.tint
    }
  }};
  background-color: ${({ color, theme }) => {
    switch (color) {
      case undefined:
      case 'base':
        return theme.color.primary.light.tint
      default:
        return theme.color[color].dark.contrast
    }
  }};
  transition: background-color ease 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${({ color, theme }) => {
      switch (color) {
        case undefined:
        case 'base':
          return theme.color.primary.light.tint
        default:
          return theme.color[color].dark.contrast
      }
    }};
  }

  border-radius: ${(p) => p.theme.radius.normal};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button: FC<Props & HTMLButtonProps> = (props) => {
  return (
    <StyledButton
      {...props}
      onClick={(event) => {
        if (props.analyticsTrack) {
          const { category, action, label } = props.analyticsTrack
          ReactGA.event({
            category: category ?? 'Button Click',
            action,
            label,
          })
        }
        if (props.onClick) props.onClick(event)
      }}
    >
      {props.children}
    </StyledButton>
  )
}
