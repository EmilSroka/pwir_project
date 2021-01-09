import React from 'react';
import styled from 'styled-components';
import { props } from '../../types/props';
import { useWindowsSize } from '../../utils/use-windows-size';

const Wrapper = styled.div<{ size: number }>`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const SquareWrapper = ({ children }: props): JSX.Element => {
  const { width, height } = useWindowsSize();
  const size = Math.min(width, height);

  return <Wrapper size={size}>{children}</Wrapper>;
};

export default SquareWrapper;
