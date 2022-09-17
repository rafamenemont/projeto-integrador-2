import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.darkerBlack};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontTheme};
    transition: all 0.50s linear;
  }
`

export default GlobalStyle;
