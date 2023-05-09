import styled from "styled-components";

export const scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  
  /* scrollbar */
  &::-webkit-scrollbar {
    width: .8rem;
    background: none;
    border: none;
  }
  &::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.Text};
    border-radius: 2px;
  }
`;

export const votes = styled.div`
  max-width: 80vw;
  display: grid;
  grid-gap: 1.2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 3fr));
  grid-auto-columns: minmax(320px, 3fr);
  
  @media (max-width: 435px) {
    max-width: 90vw;
  }
`;