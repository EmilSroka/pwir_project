import React from 'react';
import styled from 'styled-components';

const Background = styled.rect`
  fill: #12bf00;
`;

const Road = styled.rect`
  fill: #777b7e;
`;

const Line = styled.rect`
  fill: #ffffff;
`;

const IntersectionSvg = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="240 0 800 800">
      <Background x="240" width="800" height="800" />

      <Road x="240" y="321.9" width="800" height="156.3" />
      <Road x="562.9" width="156.3" height="800" />

      <Line x="240" y="325.9" width="333.5" height="8" />
      <Line x="240" y="466" width="333.5" height="8" />
      <Line x="565.5" y="0.4" width="8" height="333.5" />
      <Line x="565.5" y="466" width="8" height="333.5" />
      <Line x="706.5" y="466" width="333.5" height="8" />
      <Line x="706.5" y="325.9" width="333.5" height="8" />
      <Line x="706.5" y="0.4" width="8" height="333.5" />
      <Line x="706.5" y="466" width="8" height="333.5" />
      <Line x="240" y="420.3" width="43.2" height="8" />
      <Line x="308.7" y="420.3" width="43.2" height="8" />
      <Line x="380.5" y="420.3" width="43.2" height="8" />
      <Line x="453.5" y="420.3" width="43.2" height="8" />
      <Line x="522.3" y="420.3" width="43.2" height="8" />
      <Line x="714.5" y="372.5" width="43.2" height="8" />
      <Line x="783.2" y="372.5" width="43.2" height="8" />
      <Line x="855" y="372.5" width="43.2" height="8" />
      <Line x="928" y="372.5" width="43.2" height="8" />
      <Line x="996.8" y="372.5" width="43.2" height="8" />
      <Line x="614.2" y="282.7" width="8" height="43.2" />
      <Line x="614.2" y="214" width="8" height="43.2" />
      <Line x="614.2" y="142.2" width="8" height="43.2" />
      <Line x="614.2" y="69.2" width="8" height="43.2" />
      <Line x="614.2" y="0.4" width="8" height="43.2" />
      <Line x="659.7" y="756.3" width="8" height="43.2" />
      <Line x="659.7" y="687.7" width="8" height="43.2" />
      <Line x="659.7" y="615.8" width="8" height="43.2" />
      <Line x="659.7" y="542.8" width="8" height="43.2" />
      <Line x="659.7" y="474" width="8" height="43.2" />
      <Line x="240" y="372.5" width="333.5" height="8" />
      <Line x="706.5" y="420.3" width="333.5" height="8" />
      <Line x="659.7" y="0.4" width="8" height="333.5" />
      <Line x="614.2" y="466" width="8" height="333.5" />
      <Line x="565.5" y="372.5" width="8" height="182.5" />
      <Line x="334.2" y="325.9" width="333.5" height="8" />
      <Line x="706.5" y="94.8" width="8" height="333.5" />
      <Line x="614.2" y="466" width="333.5" height="8" />
    </svg>
  );
};

export default IntersectionSvg;
