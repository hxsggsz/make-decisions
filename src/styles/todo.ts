import styled from "styled-components";

export const Todo = styled.form`
  display: flex;
  align-items: end;
  gap: 0 1rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  max-width: 70vw;

  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  font-size: 2.8rem;
  font-weight: 600;
  word-break: break-word;
  text-align: left;
  padding: 2rem 0;
  padding-left: 1rem;
  border: .2rem solid ${({ theme }) => theme.Text};
  border-radius: 1.2rem;

  .options {
    display: flex;
    gap: .3rem;
  }
`;
