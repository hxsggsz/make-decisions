import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMenu = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: -1.7rem;
  margin-left: 1.2rem;
  display: flex;
  z-index: 9;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.Background};
  border-bottom: 0.4rem solid ${({ theme }) => theme.Text};

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
`;

export const StyledNavBar = styled(motion.nav)`
  background: ${({ theme }) => theme.Background};
  border: 0.4rem solid ${({ theme }) => theme.Text};
  height: 100vh;
  z-index: 9;
  width: 41vw;
  position: absolute;
  /* transition: display 0.5s ease-in-out; */
  left: 0;
  top: 0;
  display: flex;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 70vw;
  }

  @media (max-width: 303px) {
    width: 101vw;
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
    left: -15rem;
    margin-top: 0.5rem;
    background: ${({ theme }) => theme.Text};
    transform: scaleX(0);
    transition: transform 1s ease-in-out;
  }

  li:hover::after {
    transform: scaleX(10);
  }

  button {
    all: unset;
  }

  .SwitchRoot {
    width: 5rem;
    height: 3rem;
    background: ${({ theme }) => theme.Background};
    border: 0.3rem solid ${({ theme }) => theme.Text};
    border-radius: 9999px;
    position: relative;
  }

  .SwitchRoot[data-state="checked"] {
    background: ${({ theme }) => theme.Text};
  }

  .SwitchThumb {
    display: block;
    width: 2.1rem;
    height: 2.1rem;
    background: ${({ theme }) => theme.Text};
    border-radius: 9999px;
    transition: transform 100ms;
    transform: translateX(0.2rem);
    will-change: transform;
  }
  .SwitchThumb[data-state="checked"] {
    background: #fff;
    transform: translateX(2.8rem);
  }
`;
