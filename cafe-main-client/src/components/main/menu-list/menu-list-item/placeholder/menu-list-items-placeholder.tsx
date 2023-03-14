import React from 'react';
import * as Styled from './menu-list-item-placeholder.styled';

const placeholderArray = [1, 2, 3, 4];

const MenuListItemsPlaceholder: React.FC = () => {
  return (
    <>
      {placeholderArray.map((item) => (
        <Styled.PlaceholderContainer key={item}>
          <Styled.PlaceholderImage />
          <Styled.PlaceholderTitle />
          <Styled.PlaceholderDescription />
          <Styled.PlaceholderPrice />
          <Styled.PlaceholderButton />
        </Styled.PlaceholderContainer>
      ))}
    </>
  );
};

export default MenuListItemsPlaceholder;
