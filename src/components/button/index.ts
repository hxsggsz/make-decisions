import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.Background};
  width: 30vw;
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.Text};
  border: 0.4rem solid ${({ theme }) => theme.Text};
  border-bottom: 1rem solid ${({ theme }) => theme.Text};
  padding: 0.7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90vw;
  }

  &:hover {
    transform: translateY(-0.4rem);
  }

  &:active {
    padding: 1rem 0;
    transform: translateY(0.4rem);
    border-bottom: 0.5rem solid ${({ theme }) => theme.Text};
  }
`;
