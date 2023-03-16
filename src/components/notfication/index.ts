import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledNotification = styled(motion.div)`
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
  
  .header {
    width: 100%;
    border-radius: .8rem .8rem 0 0 ;
    background: ${({ theme }) => theme.Text};
    white-space: nowrap;
  }
  
  .content {
    background: #D0D0D0;
    border-radius: 0 0 .8rem .8rem ;
    word-break: break-word;
  }

  .content, .header {
    padding: 0 .6rem;
  }
`;