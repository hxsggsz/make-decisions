import styled from "styled-components";

export const TodoPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10rem;
  gap: 1rem 0;
`

export const Todo = styled.form`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 100%;
  min-width: 60vw;
  max-width: 70vw;
  height: 60vh;
  
  overflow-y: auto;
  
  @media (max-width: 768px) {
    min-width: 90vw;
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

export const WrapperList = styled.div`
  border-radius: 1.2rem;
  overflow: hidden;
  margin-bottom: 7rem;
`;