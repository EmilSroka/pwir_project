import React from 'react';

export type props = {
  children: React.ReactNode;
};

export type PositionProps = {
  left: number;
  top: number;
};

export type StateProps = {
  rotation: number;
} & PositionProps;
