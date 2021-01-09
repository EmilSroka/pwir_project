import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { wait } from '../../utils/wait';
import { PositionProps } from '../../types/props';

type Props = {
  onClick: (x: MouseEvent) => void;
  coolDown: number;
  rotation: number;
} & PositionProps;

const Button = styled.button<{ disabled: boolean; rotation: number } & PositionProps>`
  position: absolute;
  width: 7%;
  height: 4%;
  border-radius: 12px;
  background: rgba(0, 255, 0, 0.3);
  border: none;
  transition: background-color 0.3s ease-in;

  ${({ disabled, rotation, left, top }) =>
    css`
      top: ${top}%;
      left: ${left}%;
      transform: rotate(${rotation}deg);

      ${disabled
        ? css`
            background: rgba(255, 0, 0, 0.3);
          `
        : css`
            &:hover {
              background: green;
            }
          `}
    `}
`;

const AddCarButton = ({ onClick, coolDown, ...position }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const onClickDecorator = useCallback(
    (event) => {
      onClick(event);
      (async () => {
        setDisabled(true);
        await wait(coolDown);
        setDisabled(false);
      })();
    },
    [onClick, coolDown],
  );

  return <Button onClick={!disabled ? onClickDecorator : undefined} disabled={disabled} {...position}></Button>;
};

export default AddCarButton;
