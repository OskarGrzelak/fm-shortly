import React from 'react'
import { StyledHeader, Nav, Logo, Menu, NavLink } from '../styles/Header.styled'
import { Container } from '../styles/Container.styled'
import Button from './Button'
import { ReactComponent as ShortlyLogo } from '../assets/img/logo.svg'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <NavLink href="/">
            <Logo as={ShortlyLogo} />
          </NavLink>
          <Menu>
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Resources</NavLink>
          </Menu>
          <Menu separated>
            <NavLink href="#">Login</NavLink>
            <Button>Sign Up</Button>
          </Menu>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
