import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledOption = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  font-size: 2.8rem;
  font-weight: 600;
  word-break: break-word;
  text-align: left;
  padding: 2rem 0;
  width: 100%;
  padding-left: 1rem;
  border: .2rem solid ${({ theme }) => theme.Text};
  border-radius: 1.2rem;

  .options {
    display: flex;
    gap: .3rem;
  }

  .changeOption {
    display: flex;
    gap: 0 .3rem;
    align-items: center;
    width: 100%;
  }

`;