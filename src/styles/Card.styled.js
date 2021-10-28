import styled from 'styled-components'

export const CardGroup = styled.div`
  display: flex;
  margin: 120px -20px 80px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    display: block;
    top: 50%;
    left: 20px;
    width: calc(100% - 40px);
    height: 10px;
    transform: translateY(-50%);
    background-color: var(--color-primary-cyan);
    z-index: 0;
  }
`

export const Card = styled.div`
  background-color: var(--color-white);
  padding: 70px 20px 30px;
  position: relative;
  margin: 0 20px;
  z-index: 1;
  text-align: initial;

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
  }

  & > h3 {
    font-size: 20px;
    color: var(--color-neutral-dark-blue);
    margin-bottom: 20px;
  }

  & > p {
    color: var(--color-neutral-gray);
  }

  &:first-child {
    transform: translateY(-40px);
  }

  &:last-child {
    transform: translateY(40px);
  }
`
