import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${({ bgColor }) => bgColor || 'var(--color-white)'};
  ${({ bgImage }) => bgImage && `background-image: url(${bgImage});`}
  padding: ${({ padding }) => padding || '50px 0'};
  ${({ textCenter }) => textCenter && 'text-align: center;'}

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`

export const SectionHeading = styled.h2`
  color: ${({ color }) => color || 'var(--color-neutral-dark-blue)'};
  font-size: 40px;
  line-height: 1.1;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const SectionLead = styled.p`
  color: var(--color-neutral-gray);
  width: 45ch;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
