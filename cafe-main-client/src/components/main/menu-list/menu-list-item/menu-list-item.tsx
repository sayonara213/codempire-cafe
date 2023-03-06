import React from 'react';
import * as Styled from './menu-list-item.styled';
import { IMAGES } from './../../../../constants/images';

const MenuListItem: React.FC = () => {
  return (
    <Styled.MenuListItemContainer>
      <Styled.MenuListItemImage src={IMAGES.placeholderDish} />
      <Styled.MenuListItemTitle>Some Soup</Styled.MenuListItemTitle>
      <Styled.MenuListItemDescription>
        Steaming bowl full of homemade...
      </Styled.MenuListItemDescription>
      <Styled.MenuListItemPrice>500uah</Styled.MenuListItemPrice>
      <Styled.MenuListItemButton>TO CART</Styled.MenuListItemButton>
    </Styled.MenuListItemContainer>
  );
};

export default MenuListItem;
