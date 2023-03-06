import React from 'react';
import Filters from './filters/filters';

import Heading from './heading/heading';
import { BodyContainer, MainContainer } from './main.styled';
import MenuList from './menu-list/menu-list';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Heading />
      <BodyContainer>
        <Filters />
        <MenuList />
      </BodyContainer>
    </MainContainer>
  );
};

export default Main;
