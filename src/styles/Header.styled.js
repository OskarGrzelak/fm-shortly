import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`

export const Logo = styled.svg`
  fill: var(--color-neutral-dark-blue);
  display: block;
`

export const MenuButton = styled.svg`
  display: none;
  width: 24px;
  height: 24px;
  fill: var(--color-neutral-gray);
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
`

export const Menu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: var(--color-primary-dark-violet);
    border-radius: 15px;
    position: absolute;
    top: calc(100% + 20px);
    padding: 20px;
    text-align: center;
    z-index: 1;
    transition: opacity 0.2s;
    ${({ open }) => (open ? 'visibility: visible' : 'visibility: hidden')};
    ${({ open }) => (open ? 'opacity: 1' : 'opacity: 0')};
  }
`

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  margin-right: 30px;
  ${({ separated }) => separated && 'margin-left: auto'};
  transition: color 0.2s;

  &:link,
  &:visited {
    color: var(--color-neutral-gray);
  }

  &:active,
  &:hover {
    color: var(--color-neutral-dark-violet);
  }

  @media (max-width: 768px) {
    ${({ separated }) =>
      separated && 'border-top: 1px solid var(--color-primary-light-violet)'};

    &:link,
    &:visited {
      color: var(--color-white);
    }

    &:active,
    &:hover {
      color: var(--color-white);
    }
    ${Menu} & {
      width: 100%;
      margin: 0;
      padding: 20px 0;
    }
  }
`
