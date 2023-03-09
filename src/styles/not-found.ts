import styled from "styled-components";

export const StyledNotFound = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  img {
    @media screen and (max-width: 506px) {
      max-width: 90vw;
      max-height: 70vh;
    }
  }
  & > div {
    height: 100vh;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    border: 1px solid red;
    @media screen and (max-width: 480px) {
      max-height: 30vh;
    }
  }
  button {
    position: absolute;
    bottom: 0;
  }
  button h1 {
    white-space: nowrap;
  }
`;