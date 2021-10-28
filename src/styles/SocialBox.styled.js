import styled from 'styled-components'

export const StyledSocialBox = styled.div`
  margin: -10px -10px;
`

export const SocialIcon = styled.svg`
  fill: var(--color-white);
  transition: fill 0.25s;
  margin: 10px;

  a:hover & {
    fill: var(--color-primary-cyan);
  }
`
