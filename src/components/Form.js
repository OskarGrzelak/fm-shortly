import React, { useRef } from 'react'
import { StyledForm, InputGroup, Input, ErrorMsg } from '../styles/Form.styled'
import { useShrtCode } from '../hooks/useShrtCode'
import Button from './Button'
import shortenBG from '../assets/img/bg-shorten-desktop.svg'

const Form = () => {
  const inputRef = useRef('')
  const { shortenLink, error, setError } = useShrtCode()
  const handleClick = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value
    shortenLink(inputValue)
    inputRef.current.value = ''
  }

  const handleChange = () => {
    if (error) {
      setError('')
    }
  }

  return (
    <StyledForm bgColor="var(--color-primary-dark-violet)" bgImage={shortenBG}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Shorten a link here..."
          ref={inputRef}
          error={error}
          onChange={handleChange}
        />
        {error && <ErrorMsg>Please add a valid link</ErrorMsg>}
      </InputGroup>
      <Button size="20px" bRadius="10px" onClick={handleClick}>
        Shorten It!
      </Button>
    </StyledForm>
  )
}

export default Form
