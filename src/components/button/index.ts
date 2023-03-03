import styled from "styled-components";

type StyledButtonProps = {
  desktop: boolean | undefined;
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  background: ${({ theme }) => theme.Background};
  width: ${({ desktop }) => (desktop ? "30vw" : "90vw")};
  border-radius: 2.4rem;
  color: ${({ theme }) => theme.Text};
  border: 0.4rem solid ${({ theme }) => theme.Text};
  border-bottom: 1rem solid ${({ theme }) => theme.Text};
  padding: 0.7rem 0;

  &:hover {
    transform: translateY(-0.4rem);
  }

  &:active {
    padding: 1rem 0;
    transform: translateY(0.4rem);
    border-bottom: 0.5rem solid ${({ theme }) => theme.Text};
  }
`;
