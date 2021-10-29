import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useLocalStorage } from './useLocalStorage'

export const ShrtCodeContext = createContext()

export const useShrtCode = () => {
  return useContext(ShrtCodeContext)
}

export const ShrtCodeProvider = ({ children }) => {
  const [links, setLinks] = useLocalStorage('links', [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const shortenLink = async (url) => {
    setLoading(true)
    try {
      const {
        data: { result },
      } = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      if (links) {
        setLinks((prev) => [
          ...prev,
          {
            original: result.original_link,
            short: result.full_short_link3,
          },
        ])
      } else {
        setLinks([
          {
            original: result.original_link,
            short: result.full_short_link3,
          },
        ])
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const value = { shortenLink, links, error, setError, loading }

  return (
    <ShrtCodeContext.Provider value={value}>
      {children}
    </ShrtCodeContext.Provider>
  )
}
