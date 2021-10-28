import styled from 'styled-components'

export const Hero = styled.div`
  padding: 50px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 0 40px;
    text-align: center;
  }

  h1 {
    width: 45%;
    color: var(--color-neutral-dark-blue);
    font-size: 70px;
    line-height: 1.1;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 35px;
    }
  }

  p {
    width: 45%;
    color: var(--color-neutral-gray);
    font-size: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 16px;
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    max-width: 700px;
    width: 65%;
    z-index: -1;

    @media (max-width: 768px) {
      position: static;
      transform: translateY(0);
      height: 320px;
      width: auto;
      margin-bottom: 40px;
    }
  }
`
