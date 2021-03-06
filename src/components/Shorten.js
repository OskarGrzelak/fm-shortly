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
import Loader from './Loader'

const Shorten = () => {
  const { links, loading } = useShrtCode()
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
          {loading && <Loader />}
          {links &&
            links
              .slice(0)
              .reverse()
              .map((link, index) => {
                return (
                  <ShortenLinkTab key={index}>
                    <OriginalUrl>{link.original}</OriginalUrl>
                    <ShortUrl>{link.short}</ShortUrl>
                    {copiedIndex !== index ? (
                      <Button
                        bRadius="5px"
                        onClick={() => handleCopyLink(index)}
                        full
                      >
                        Copy
                      </Button>
                    ) : (
                      <Button
                        bRadius="5px"
                        bgColor="var(--color-primary-dark-violet)"
                        noHover
                        full
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
