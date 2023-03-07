import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.Background};
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.Text};
  border: 0.4rem solid ${({ theme }) => theme.Text};
  border-bottom: 1rem solid ${({ theme }) => theme.Text};
  padding: 0 3rem;
  display: flex;
  align-items: center;
  min-width: 30vw;  

  @media (max-width: 768px) {
    padding: 0 2rem;
    width: 90vw;
  }

  &:hover {
    transform: translateY(-0.4rem);
  }

  &:active {
    transform: translateY(0);
    border-bottom: 0.5rem solid ${({ theme }) => theme.Text};
  }
`;
