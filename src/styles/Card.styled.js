import styled from 'styled-components'

export const CardGroup = styled.div`
  display: flex;
  margin: 120px -20px 80px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    top: 50%;
    left: 20px;
    width: calc(100% - 40px);
    height: 10px;
    transform: translate(0, -50%);
    background-color: var(--color-primary-cyan);
    z-index: 0;

    @media (max-width: 768px) {
      top: 40px;
      left: 50%;
      width: 6px;
      height: calc(100% - 80px);
      transform: translate(-50%, 0);
    }
  }
`

export const Card = styled.div`
  background-color: var(--color-white);
  padding: 70px 20px 30px;
  position: relative;
  margin: 0 20px;
  z-index: 1;
  text-align: initial;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 80px;
    padding: 60px 20px 20px;
  }

  & > span {
    border-radius: 100%;
    height: 80px;
    width: 80px;
    background-color: var(--color-primary-dark-violet);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -40px;
    left: 20px;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  & > h3 {
    font-size: 20px;
    color: var(--color-neutral-dark-blue);
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  & > p {
    color: var(--color-neutral-gray);
  }

  &:first-child {
    transform: translateY(-40px);

    @media (max-width: 768px) {
      transform: translateY(0);
    }
  }

  &:last-child {
    transform: translateY(40px);

    @media (max-width: 768px) {
      transform: translateY(0);
    }
  }
`
