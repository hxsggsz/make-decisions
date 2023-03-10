import styled from "styled-components";

export const StyledInput = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.Text};
  font-size: 2rem;
  font-weight: 700;

  input {
    color: ${({ theme }) => theme.Text};
    font-size: 2rem;
    font-weight: 700;
    width: 100%;
    height: 4.5rem;
    outline: none;
    background: #c9b3e6;
    transition: all 250ms ease-in;
    border-radius: 1.2rem;
    border: 0.2rem solid #423a4f;
    padding: 0 4.5rem 0 0.5rem;
  }

  input:focus {
    background: #d9d9d9;
    border: 0.4rem solid ${({ theme }) => theme.Text};
    box-shadow: 0rem 0.4rem ${({ theme }) => theme.Text};
  }
`;
