import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 40px 0;
`

export const Logo = styled.svg`
  fill: var(--color-neutral-dark-blue);
  display: block;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const Menu = styled.nav`
  ${({ separated }) => separated && 'margin-left: auto'}
`

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  margin-right: 30px;
  transition: color 0.2s;

  &:link,
  &:visited {
    color: var(--color-neutral-gray);
  }

  &:active,
  &:hover {
    color: var(--color-neutral-dark-violet);
  }
`
