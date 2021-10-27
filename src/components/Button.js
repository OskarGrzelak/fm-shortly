import React from 'react'
import { StyledButton } from '../styles/Button.styled'

const Button = ({ children, onClick, size, minradius }) => {
  return (
    <StyledButton size={size} minradius={minradius} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
