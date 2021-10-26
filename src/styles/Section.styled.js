import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${({ bgColor }) => bgColor || 'var(--color-white)'};
  ${({ bgImage }) => bgImage && `background-image: url(${bgImage});`}
  padding: ${({ padding }) => padding || '50px 0'};
  ${({ textCenter }) => textCenter && 'text-align: center;'}
`
