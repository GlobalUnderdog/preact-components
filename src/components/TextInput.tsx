import styled from '@emotion/styled'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Theme } from '../style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input<{}, Theme>`
  height: 44px;
  border: none;
  border-radius: ${(p) => p.theme.radius.small};
  border: 2px solid ${(p) => p.theme.color.primary.light.tint};

  background: none;
  background-color: ${(p) => p.theme.color.base.light.tint};

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.color.primary.normal.tint};
  }
`

const StyledLabel = styled.label<{}, Theme>`
  color: ${(p) => p.theme.color.primary.normal.tint};
  font-size: 16px;
  margin: 4px 0 25px;
`

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
interface Props {
  label?: string
  type?:
    | 'date'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
}

export const TextInput: React.FC<HTMLInputProps & Props> = (props) => {
  const { label, id } = props

  return (
    <Wrapper>
      <StyledInput {...props} />
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    </Wrapper>
  )
}

TextInput.defaultProps = { type: 'text' }
