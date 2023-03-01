import { DefaulTheme, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaulTheme }>`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; // 62.5% = 10px
  }

  body {
    display: flex;
    /* font-family: Ubuntu Condensed; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.Background};
    color: ${({ theme }) => theme.Text}; */
    &::-webkit-scrollbar {
        width: 15px;
        border: 1px solid black;
        background: ${({ theme }) => theme.Text};
      }
      
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.Background};
      border-radius: 2px;
    }
  } 

  ul {
      list-style: none;
      text-decoration: none;
      display: flex;
   }
`;
