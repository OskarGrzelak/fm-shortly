import React, { useState } from 'react'
import {
  StyledHeader,
  Nav,
  Logo,
  Menu,
  MenuButton,
  NavLink,
} from '../styles/Header.styled'
import { Container } from '../styles/Container.styled'
import Button from './Button'
import { ReactComponent as ShortlyLogo } from '../assets/img/logo.svg'
import { ReactComponent as MenuIcon } from '../assets/img/icon-menu.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <NavLink href="/">
            <Logo as={ShortlyLogo} />
          </NavLink>
          <Menu open={menuOpen}>
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Resources</NavLink>
            <NavLink href="#" separated>
              Login
            </NavLink>
            <Button full>Sign Up</Button>
          </Menu>
          <MenuButton as={MenuIcon} onClick={toggleMenu} />
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
