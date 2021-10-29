import styled from 'styled-components'

export const ShortenBox = styled.div`
  background-color: var(--color-neutral-gray-light);
  margin-top: 171px;
  margin-bottom: -71px;

  @media (max-width: 768px) {
    margin-top: 122px;
    margin-bottom: -42px;
  }
`

export const ShortenContent = styled.div`
  transform: translateY(-71px);

  @media (max-width: 768px) {
    transform: translateY(-82px);
  }
`

export const ShortenLinkTab = styled.div`
  background-color: var(--color-white);
  padding: 0.8em 1.5em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    padding: 20px;
  }
`

export const OriginalUrl = styled.div`
  margin-right: auto;
  color: var(--color-neutral-dark-blue);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
    margin-right: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-neutral-gray-light);
  }
`

export const ShortUrl = styled.div`
  margin: 0 20px;
  color: var(--color-primary-cyan);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 20px 0;
  }
`
