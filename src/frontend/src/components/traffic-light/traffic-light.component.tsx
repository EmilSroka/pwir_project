import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useLight } from './use-light';
import { wait } from '../../utils/wait';
import { PositionProps } from '../../types/props';

type TrafficLightProps = PositionProps & {
  state: 'green' | 'red';
};

const Board = styled.svg<PositionProps>`
  width: 5%;
  height: 5%;
  position: absolute;
  ${({ left, top }) => css`
    top: ${top}%;
    left: ${left}%;
  `}
`;

const TrafficLight = ({ left, top, state }: TrafficLightProps): JSX.Element => {
  const [redLight, setRedLightState] = useLight({ color: '#ef2929', outlineColor: '#a40000', cx: 24, cy: 12 });
  const [yellowLight, setYellowLightState] = useLight({ color: '#ff6600', outlineColor: '#ce5c00', cx: 24, cy: 24 });
  const [greenLight, setGreenLightState] = useLight({ color: '#6fbc28', outlineColor: '#4e9a06', cx: 24, cy: 36 });

  useEffect(() => {
    (async () => {
      if (state === 'green') {
        setYellowLightState(true);
        await wait(500);
        setRedLightState(false);
        setYellowLightState(false);
        setGreenLightState(true);
      } else {
        setGreenLightState(false);
        setYellowLightState(true);
        await wait(500);
        setRedLightState(true);
        setYellowLightState(false);
      }
    })();
  }, [state]);

  return (
    <Board viewBox="0 0 48 48" {...{ left, top }}>
      <defs>
        <linearGradient id="svg-reflection" y2="28" gradientUnits="userSpaceOnUse" x2="29" y1=".43750" x1="11">
          <stop id="stop3405" stopColor="#eeeeec" offset="0" />
          <stop id="stop3407" stopColor="#eeeeec" stopOpacity="0" offset="1" />
        </linearGradient>
      </defs>
      <rect fill="#2e3436" ry="1" height="40" width="18" y="4.4" x="15" />
      <path
        opacity=".5"
        fill="#eeeec"
        d="m16.938 5c-0.527 0-0.938 0.4112-0.938 0.9375v36.124c0 0.527 0.411 0.938 0.938 0.938h14.124c0.527 0 0.938-0.411 0.938-0.938v-36.124c0-0.5268-0.411-0.938-0.938-0.938h-14.124zm0.968 1h12.188c0.498 0 0.906 0.4076 0.906 0.9062v34.188c0 0.498-0.408 0.906-0.906 0.906h-12.188c-0.498 0-0.906-0.408-0.906-0.906v-34.188c0-0.4984 0.408-0.906 0.906-0.906z"
      />
      <rect fill="#555753" ry=".90001" height="36" width="14" y="6" x="17" />
      <path
        fill="url(#svg-reflection)"
        d="m16.938 5c-0.527 0-0.938 0.4112-0.938 0.9375v20.062c1-3 11-3 13-3 0.627 0 1.76-0.513 3-1.219v-15.844c0-0.5258-0.411-0.937-0.938-0.937h-14.124z"
      />

      {redLight}
      {yellowLight}
      {greenLight}
    </Board>
  );
};

export default TrafficLight;
