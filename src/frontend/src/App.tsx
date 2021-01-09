import React from 'react';
import './App.css';
import Intersection from './components/intersection/intersection.component';
import TrafficLight from './components/traffic-light/traffic-light.component';
import SquareWrapper from './components/square-wrapper/square-wrapper.component';
import {
  ButtonID,
  buttonIDToProps,
  ColorCode,
  colorCodeToString,
  StateId,
  stateIdToProps,
  TrafficLightId,
  trafficLightIdToPosition,
} from './utils/id-to-position';
import Car from './components/car/car.component';
import { useWebsocket } from './websocket/use-connection';
import AddCarButton from './components/add-car/add-car-button.component';
import styled from 'styled-components';

const buttonIDs: ButtonID[] = [110, 120, 210, 220, 310, 320, 410, 420];

const Text = styled.p`
  width: 100%;
  font-size: 32px;
  text-align: center;
  color: white;
`;

function App() {
  const [isConnected, messages, send] = useWebsocket({ url: 'ws://localhost:8080/ws' });

  if (!isConnected) return <Text>No connection to server!</Text>;

  const { lights = [], cars = [] } = JSON.parse(messages?.[0] || '{}');
  send('received');

  return (
    <SquareWrapper>
      <Intersection></Intersection>
      {cars.map(([id, state]: [number, StateId]) => (
        <Car key={id} id={id} {...stateIdToProps[state]} />
      ))}
      {lights.map(([id, state]: [TrafficLightId, ColorCode]) => (
        <TrafficLight key={id} {...trafficLightIdToPosition[id]} state={colorCodeToString[state]} />
      ))}
      {buttonIDs.map((id) => (
        <AddCarButton key={id} onClick={() => send(id.toString())} coolDown={1000} {...buttonIDToProps[id]} />
      ))}
    </SquareWrapper>
  );
}

export default App;
