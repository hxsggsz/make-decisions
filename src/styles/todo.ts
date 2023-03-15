import styled from "styled-components";

export const TodoPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10rem;
`

export const Todo = styled.form`
  display: flex;
  align-items: end;
  gap: 1rem;
`;

export const Ul = styled.ul`
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 100%;
  max-width: 70vw;
  height: 70vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    max-width: 100vw;
  }
  /* scrollbar */
  &::-webkit-scrollbar {
    width: 0.7vw;
    background: none;
    border: none;
  }
  &::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.Text};
    border-radius: 2px;
  }
`;