import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: var(--color-neutral-dark-violet);
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`

export const Logo = styled.svg`
  fill: var(--color-white);
  display: block;
  margin-right: 60px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`

export const FooterMenu = styled.div`
  ${({ separated }) => separated && 'margin-left: auto;'}
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin: 0;
  }

  ul {
    list-style: none;
    margin-right: 60px;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }

  h3 {
    font-size: 16px;
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
