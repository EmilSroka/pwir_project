import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  color: string;
  outlineColor: string;
  cx: number;
  cy: number;
  active?: boolean;
  r?: number;
};

const Outline = styled.circle<{ isActive: boolean; color: string }>`
  transition: fill 0.3s ease-in;

  ${({ isActive, color }) => css`
    fill: ${isActive ? color : '#000'};
  `}
`;

const Circle = styled.circle<{ isActive: boolean; color: string }>`
  transition: fill 0.3s ease-in;

  ${({ isActive, color }) => css`
    fill: ${isActive ? color : '#222'};
  `}
`;

export const useLight = ({
  color,
  outlineColor,
  cx,
  cy,
  active = false,
  r = 5.5,
}: Props): [JSX.Element, (state: boolean) => void] => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const setActive = useCallback((state: boolean) => {
    setIsActive(state);
  }, []);

  return [
    <>
      <Outline color={outlineColor} {...{ cx, cy, r, isActive }} />
      <Circle r={0.81 * r} {...{ cx, cy, color, isActive }} />
    </>,
    setActive,
  ];
};
