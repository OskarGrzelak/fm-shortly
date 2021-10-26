import styled from 'styled-components'

export const StyledButton = styled.button`
  border: none;
  border-radius: ${({ minradius }) => (minradius ? '10px' : '50px')};
  background-color: var(--color-primary-cyan);
  color: var(--color-white);
  font-weight: 700;
  font-size: ${({ size }) => size || `16px`};
  padding: 0.8em 1.5em;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-cyan-light);
  }
`
