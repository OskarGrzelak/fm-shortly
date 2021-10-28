import React, { useRef, useState } from 'react'
import { StyledForm, InputGroup, Input, ErrorMsg } from '../styles/Form.styled'
import { useShrtCode } from '../hooks/useShrtCode'
import Button from './Button'
import shortenBG from '../assets/img/bg-shorten-desktop.svg'

const Form = () => {
  const inputRef = useRef('')
  const [inputError, setInputError] = useState(false)
  const { shortenLink } = useShrtCode()
  const handleClick = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value
    if (!inputValue) {
      setInputError(true)
    }
    shortenLink(inputValue)
    inputRef.current.value = ''
  }

  const handleChange = () => {
    if (inputError) {
      setInputError(false)
    }
  }

  return (
    <StyledForm bgColor="var(--color-primary-dark-violet)" bgImage={shortenBG}>
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
      <Button size="20px" bRadius="10px" onClick={handleClick}>
        Shorten It!
      </Button>
    </StyledForm>
  )
}

export default Form
