import styled from 'styled-components'

export const Hero = styled.div`
  padding: 100px 0;
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
    top: 0;
    right: -100px;
    z-index: -1;
  }
`
