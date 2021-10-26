import React from 'react'
import { StyledSocialBox, SocialIcon } from '../styles/SocialBox.styled'
import { ReactComponent as FacebookIcon } from '../assets/img/icon-facebook.svg'
import { ReactComponent as TwitterIcon } from '../assets/img/icon-twitter.svg'
import { ReactComponent as PinterestIcon } from '../assets/img/icon-pinterest.svg'
import { ReactComponent as InstagramIcon } from '../assets/img/icon-instagram.svg'

const SocialBox = () => {
  return (
    <StyledSocialBox>
      <a href="/">
        <SocialIcon as={FacebookIcon} />
      </a>
      <a href="/">
        <SocialIcon as={TwitterIcon} />
      </a>
      <a href="/">
        <SocialIcon as={PinterestIcon} />
      </a>
      <a href="/">
        <SocialIcon as={InstagramIcon} />
      </a>
    </StyledSocialBox>
  )
}

export default SocialBox
