import React, { useState } from 'react'
import { useShrtCode } from '../hooks/useShrtCode'
import { Container } from '../styles/Container.styled'
import {
  ShortenBox,
  ShortenContent,
  ShortenLinkTab,
  OriginalUrl,
  ShortUrl,
} from '../styles/Shorten.styled'
import Button from './Button'
import Form from './Form'

const Shorten = () => {
  const { links } = useShrtCode()
  const [copiedIndex, setCopiedIndex] = useState()

  const handleCopyLink = async (index) => {
    const { short } = links[index]
    await navigator.clipboard.writeText(short)
    setCopiedIndex(index)
  }

  return (
    <ShortenBox>
      <ShortenContent>
        <Container>
          <Form />
          {links &&
            links.map((link, index) => {
              return (
                <ShortenLinkTab key={index}>
                  <OriginalUrl>{link.original}</OriginalUrl>
                  <ShortUrl>{link.short}</ShortUrl>
                  {copiedIndex !== index ? (
                    <Button bRadius="5px" onClick={() => handleCopyLink(index)}>
                      Copy
                    </Button>
                  ) : (
                    <Button
                      bRadius="5px"
                      bgColor="var(--color-primary-dark-violet)"
                      noHover
                    >
                      Copied!
                    </Button>
                  )}
                </ShortenLinkTab>
              )
            })}
        </Container>
      </ShortenContent>
    </ShortenBox>
  )
}

export default Shorten
