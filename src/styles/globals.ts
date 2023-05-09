import { DefaulTheme, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaulTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; // 62.5% = 10px
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.Text};
    background-color: ${({ theme }) => theme.Background};
  }
  
  ul, a {
    color: ${({ theme }) => theme.Text};
    list-style: none;
    text-decoration: none;
    display: flex;
  }
`;
