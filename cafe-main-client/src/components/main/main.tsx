import React from 'react';

import { useAppSelector } from '../../hooks/hooks';

import Filters from './filters/filters';
import Heading from './heading/heading';
import MenuList from './menu-list/menu-list';

import { BodyContainer, MainContainer } from './main.styled';

const Main: React.FC = () => {
  const { user } = useAppSelector((store) => store.user);

  return (
    <MainContainer>
      <Heading isAdmin={user.role === 'admin'} />
      <BodyContainer>
        <Filters />
        <MenuList isAdmin={user.role === 'admin'} />
      </BodyContainer>
    </MainContainer>
  );
};

export default Main;
