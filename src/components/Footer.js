import React from 'react'
import {
  StyledFooter,
  FooterMenu,
  FooterLink,
  Logo,
} from '../styles/Footer.styled'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import SocialBox from './SocialBox'
import { ReactComponent as ShortlyLogo } from '../assets/img/logo.svg'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <FooterLink href="/">
            <Logo as={ShortlyLogo} />
          </FooterLink>
          <FooterMenu separated>
            <ul>
              <h3>Features</h3>
              <li>
                <FooterLink href="#">Link Shortering</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Branded Links</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Analytics</FooterLink>
              </li>
            </ul>
            <ul>
              <h3>Resources</h3>
              <li>
                <FooterLink href="#">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Developers</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Support</FooterLink>
              </li>
            </ul>
            <ul>
              <h3>Company</h3>
              <li>
                <FooterLink href="#">About</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Our Team</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Careers</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Contact</FooterLink>
              </li>
            </ul>
          </FooterMenu>
          <SocialBox />
        </Flex>
      </Container>
    </StyledFooter>
  )
}

export default Footer
