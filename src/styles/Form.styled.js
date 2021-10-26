import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  padding: 40px 60px;
  background-color: ${({ bgColor }) => bgColor || 'var(--color-white)'};
  ${({ bgImage }) => bgImage && `background-image: url(${bgImage});`}
  border-radius: 15px;
  transform: translateY(50%);
`

export const Input = styled.input`
  width: 100%;
  margin-right: 30px;
  border: none;
  border-radius: 15px;
  padding: 0.8em 1.5em;
  font-size: 20px;
  font-family: inherit;

  &::placeholder {
    color: var(--color-neutral-gray);
    font-weight: 500;
  }
`
