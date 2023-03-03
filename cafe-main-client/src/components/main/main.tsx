import React from 'react';

import Heading from './heading/heading';
import { MainContainer } from './main.styled';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Heading />
    </MainContainer>
  );
};

export default Main;
