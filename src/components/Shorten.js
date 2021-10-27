import React, { useRef, useState } from 'react'
import { useShrtCode } from '../hooks/useShrtCode'
import { Container } from '../styles/Container.styled'
import { Form, InputGroup, Input, ErrorMsg } from '../styles/Form.styled'
import {
  ShortenBox,
  ShortenContent,
  ShortenLinkTab,
  OriginalUrl,
  ShortUrl,
} from '../styles/Shorten.styled'
import Button from './Button'
import shortenBG from '../assets/img/bg-shorten-desktop.svg'

const Shorten = () => {
  const inputRef = useRef('')
  const { shortenLink, links } = useShrtCode()
  const [inputError, setInputError] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState()
  const handleClick = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value
    if (!inputValue) {
      setInputError(true)
    }
    const linkToShorten = inputRef.current.value
    shortenLink(linkToShorten)
    inputRef.current.value = ''
  }

  const handleChange = () => {
    if (inputError) {
      setInputError(false)
    }
  }

  const handleCopyLink = async (index) => {
    const { short } = links[index]
    await navigator.clipboard.writeText(short)
    setCopiedIndex(index)
  }

  return (
    <ShortenBox>
      <ShortenContent>
        <Container>
          <Form bgColor="var(--color-primary-dark-violet)" bgImage={shortenBG}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Shorten a link here..."
                ref={inputRef}
                error={inputError}
                onChange={handleChange}
              />
              {inputError && <ErrorMsg>Please add a link</ErrorMsg>}
            </InputGroup>
            <Button size="20px" minradius onClick={handleClick}>
              Shorten It!
            </Button>
          </Form>
          {links &&
            links.map((link, index) => {
              return (
                <ShortenLinkTab key={index}>
                  <OriginalUrl>{link.original}</OriginalUrl>
                  <ShortUrl>{link.short}</ShortUrl>
                  {copiedIndex !== index ? (
                    <Button minradius onClick={() => handleCopyLink(index)}>
                      Copy
                    </Button>
                  ) : (
                    <Button
                      minradius
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
