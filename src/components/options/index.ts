import { motion } from 'framer-motion';
import styled from 'styled-components';

export const option = styled(motion.li)`
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
  box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const inputOption = styled(motion.span)`
  display: flex;
  gap: 0 .3rem;
  align-items: center;
  width: 100%
`;

export const buttonsWrapper = styled.div`
  display: flex;
  gap: .3rem;
`;