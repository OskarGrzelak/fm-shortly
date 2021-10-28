import styled from 'styled-components'

export const Hero = styled.div`
  padding: 50px 0;
  position: relative;

  h1 {
    width: 45%;
    color: var(--color-neutral-dark-blue);
    font-size: 70px;
    line-height: 1.1;
  }

  p {
    width: 45%;
    color: var(--color-neutral-gray);
    font-size: 20px;
    margin-bottom: 20px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    max-width: 700px;
    width: 65%;
    z-index: -1;
  }
`
