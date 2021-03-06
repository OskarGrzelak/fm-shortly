import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  padding: 40px 60px;
  background-color: ${({ bgColor }) => bgColor || 'var(--color-white)'};
  ${({ bgImage }) => bgImage && `background-image: url(${bgImage});`}
  border-radius: 15px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`

export const InputGroup = styled.label`
  width: 100%;
  margin-right: 30px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`

export const Input = styled.input`
  width: 100%;
  border: ${({ error }) =>
    error ? '2px solid var(--color-secondary-red)' : '2px solid transparent'};
  border-radius: 10px;
  padding: 0.8em 1.5em;
  font-size: 20px;
  font-family: inherit;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &::placeholder {
    color: var(--color-neutral-gray);
    font-weight: 500;
  }
`

export const ErrorMsg = styled.em`
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 14px;
  color: var(--color-secondary-red);
  padding-top: 5px;

  @media (max-width: 768px) {
    position: static;
  }
`
