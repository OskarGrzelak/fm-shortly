import styled from 'styled-components'

export const ShortenBox = styled.div`
  background-color: var(--color-neutral-gray-light);
  margin-top: 171px;
  margin-bottom: -71px;
`

export const ShortenContent = styled.div`
  transform: translateY(-71px);
`

export const ShortenLinkTab = styled.div`
  background-color: var(--color-white);
  padding: 0.8em 1.5em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const OriginalUrl = styled.div`
  margin-right: auto;
  color: var(--color-neutral-very-dark-blue);
  overflow-wrap: anywhere;
`

export const ShortUrl = styled.div`
  margin: 0 20px;
  color: var(--color-primary-cyan);
`
