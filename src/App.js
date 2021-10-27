import React from 'react'
import { ShrtCodeProvider } from './hooks/useShrtCode'
import GlobalStyle from './styles/Global'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <>
      <ShrtCodeProvider>
        <GlobalStyle />
        <LandingPage />
      </ShrtCodeProvider>
    </>
  )
}

export default App
