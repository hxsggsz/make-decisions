import { DefaulTheme, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaulTheme }>`
  :root {
    font-size: 62.5%; // 62.5% = 10px
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100%;
    display: flex;
    overflow-x: hidden;
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
