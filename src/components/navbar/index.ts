import styled from "styled-components";

type NavStylestypes = {
  isShowMenu: boolean;
};

export const StyledNavbar = styled.div<NavStylestypes>`
  border: 10px solid red;
  width: 100vw;
  height: 100vh;
  position: absolute;

  & > div {
    width: 100vw;
    position: fixed;
    top: 0;
    left: -1.7rem;
    margin-left: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1.6rem;
    background: ${({ theme }) => theme.Background};
  }

  nav {
    background: ${({ theme }) => theme.Background};
    border: 0.4rem solid ${({ theme }) => theme.Text};
    height: 100vh;
    z-index: 9;
    width: 41vw;
    position: absolute;
    transition: left 0.5s ease-in-out;
    left: ${({ isShowMenu }) => (isShowMenu ? 0 : "-4000px")};
    top: 0;
    display: flex;
    overflow: hidden;

    @media (max-width: 487px) {
      width: 70vw;
    }

    @media (max-width: 303px) {
      width: 101vw;
    }
  }

  .logo {
    user-select: none;
    margin-right: 3rem;
    display: block;
    @media (max-width: 378px) {
      display: none;
    }
  }

  .icon {
    display: none;
    @media (max-width: 378px) {
      display: block;
    }
  }

  .close {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding-bottom: 0.2rem;
    border-bottom: 0.4rem solid ${({ theme }) => theme.Text};
  }

  ul {
    margin-top: 8.2rem;
    display: flex;
    gap: 1.3rem;
    flex-direction: column;
  }

  li {
    cursor: pointer;
    display: flex;
    width: 100vw;
    align-items: end;
    padding-left: 1rem;
  }

  li::after {
    content: "";
    height: 0.5rem;
    width: 30rem;
    position: absolute;
    left: -20rem;
    background: ${({ theme }) => theme.Text};
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
  }

  li:hover::after {
    transform: scaleX(1);
  }
`;
