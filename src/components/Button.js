import React from 'react'
import { StyledButton } from '../styles/Button.styled'

const Button = ({ children, size, minradius }) => {
  return (
    <StyledButton size={size} minradius={minradius}>
      {children}
    </StyledButton>
  )
}

export default Button
