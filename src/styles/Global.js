import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-cyan: hsl(180, 66%, 49%);
    --color-primary-cyan-light: hsl(180, 66%, 75%);
    --color-primary-dark-violet: hsl(257, 27%, 26%);
    --color-primary-light-violet: hsl(257, 27%, 40%);

    --color-secondary-red: hsl(0, 87%, 67%);

    --color-neutral-gray: hsl(0, 0%, 75%);
    --color-neutral-gray-light: #eff1f7;
    --color-neutral-grayish-violet: hsl(257, 7%, 63%);
    --color-neutral-dark-blue: hsl(255, 11%, 22%);
    --color-neutral-dark-violet: hsl(260, 8%, 14%);

    --color-white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    overflow-x: hidden;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
