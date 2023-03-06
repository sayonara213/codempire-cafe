import React from 'react';
import * as Styled from './menu-list-item.styled';
import { IMAGES } from './../../../../constants/images';

interface MenuListItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ name, description, price, image }) => {
  return (
    <Styled.MenuListItemContainer>
      <Styled.MenuListItemImage src={image} />
      <Styled.MenuListItemTitle>{name}</Styled.MenuListItemTitle>
      <Styled.MenuListItemDescription>{description}</Styled.MenuListItemDescription>
      <Styled.MenuListItemPrice>{price}uah</Styled.MenuListItemPrice>
      <Styled.MenuListItemButton>TO CART</Styled.MenuListItemButton>
    </Styled.MenuListItemContainer>
  );
};

export default MenuListItem;
