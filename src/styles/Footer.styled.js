import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: var(--color-neutral-dark-violet);
  padding: 50px 0;
`

export const Logo = styled.svg`
  fill: var(--color-white);
`

export const FooterMenu = styled.div`
  ${({ separated }) => separated && 'margin-left: auto;'}
  display: flex;

  ul {
    list-style: none;
    margin-right: 80px;
  }

  h3 {
    font-size: 18px;
    color: var(--color-white);
    margin-bottom: 15px;
  }
`

export const FooterLink = styled.a`
  font-size: 16px;
  transition: color 0.2s;

  &:link,
  &:visited {
    color: var(--color-neutral-gray);
  }

  &:active,
  &:hover {
    color: var(--color-primary-cyan);
  }
`
