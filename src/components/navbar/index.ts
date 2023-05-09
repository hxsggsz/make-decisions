import { motion } from "framer-motion";
import styled from "styled-components";

export const menu = styled.header`
  min-height: 10vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
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
    user-select: none;
    @media (max-width: 378px) {
      display: block;
    }
  }
`;

export const wrapper = styled(motion.nav)`
  background: ${({ theme }) => theme.Background};
  border: 0.4rem solid ${({ theme }) => theme.Text};
  height: 100vh;
  z-index: 9;
  width: 41vw;
  position: absolute;
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

  .SwitchRoot {
    cursor: pointer;
    width: 5rem;
    height: 3rem;
    background: ${({ theme }) => theme.Background};
    border: 0.3rem solid ${({ theme }) => theme.Text};
    border-radius: 9999px;
    position: relative;
    margin-left: 1.2rem;
  }

  .SwitchRoot[data-state="checked"] {
    background: ${({ theme }) => theme.Background};
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
    transform: translateX(2.1rem);
  }
`;

export const close = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 10vh;
  padding-bottom: 0.2rem;
  border-bottom: 0.4rem solid ${({ theme }) => theme.Text};
`;

export const listWrapper = styled.ul`
  margin-top: 8.2rem;
  display: flex;
  gap: 1.3rem;
  flex-direction: column;
`;

export const listItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: end;
  padding-left: 1rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    padding: 0 1rem;
    border-radius: 1.2rem;
    width: 100%;
    background: ${({ theme }) => theme.Text};
    transform: scaleX(0);
    transition: transform .5s ease-in;
    z-index: -1;
  }
  
  &:hover {
    h1 {
      color: ${({ theme }) => theme.Background};
    }
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;