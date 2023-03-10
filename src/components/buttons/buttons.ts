import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background: none;

  .button {
    cursor: pointer;
    background: #d9d9d9;
    border-radius: 2.4rem;
    color: ${({ theme }) => theme.Text};
    border: 0.4rem solid ${({ theme }) => theme.Text};
    border-bottom: 1rem solid ${({ theme }) => theme.Text};
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30vw;
    font-size: 3.2rem;
    font-weight: 700;
    white-space: nowrap;

    @media (max-width: 768px) {
      width: 90vw;
    }

    &:hover {
      transition: transform 250ms ease-in-out;
      transform: translateY(-0.1rem);
    }

    &:active {
      transition: transform 250ms ease-in-out;
      transform: translateY(0.4rem);
      border-bottom: 0.5rem solid ${({ theme }) => theme.Text};
    }
  }
`;

export const StyledSubmit = styled.button`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #423a4f;
  border: 0.2rem solid black;
  padding: 0.7rem 1.2rem;
  border-radius: 1.2rem;
  position: static;
  color: #d9d9d9;
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.2);

  &:active {
    transition: transform 250ms ease-in-out;
    transform: translateY(0.4rem);
  }
`;
