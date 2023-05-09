import { motion } from 'framer-motion';
import styled from 'styled-components';

export const wrapper = styled(motion.div)`
  border: .2rem solid ${({ theme }) => theme.Text};
  border-radius: 1.1rem;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  max-width: 40vw;

  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
    max-width: 70vw;
  }

  @media (max-width: 360px) {
    max-width: 90vw;
  }
`;

export const header = styled.div`
  width: 100%;
  border-radius: .8rem .8rem 0 0 ;
  background: ${({ theme }) => theme.Text};
  white-space: nowrap;
  padding: 0 .6rem;
`;

export const content = styled.div`
  background: ${({ theme }) => theme.Background};
  border-radius: 0 0 .8rem .8rem ;
  word-break: break-word;
  padding: 0 .6rem;
`;  