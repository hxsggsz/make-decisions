import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.Background};
  width: 90vw;
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.Text};
  border: 0.4rem solid ${({ theme }) => theme.Text};
  border-bottom: 1rem solid ${({ theme }) => theme.Text};
  padding: 0.7rem 0;

  &:active {
    margin-top: 1rem;
    border-bottom: 0.5rem solid ${({ theme }) => theme.Text};
  }
`;
