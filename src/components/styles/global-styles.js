import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    margin:0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #root{
    height: 100vh;
    width: 100%;
  }
`
