import React from 'react';
import * as Styled from './menu-list-item.styled';
import { IMenu } from './../../../../types/types.menu';
import { apiDelete } from './../../../../services/api.service';
import { API_URL } from '../../../../constants/url';

interface MenuListItemProps extends IMenu {
  isAdmin?: boolean;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
  name,
  description,
  price,
  image,
  isAdmin,
  weight,
  id,
}) => {
  const handleDelete = () => {
    apiDelete(API_URL.DELETE, id);
  };

  return (
    <Styled.MenuListItemContainer>
      <Styled.MenuImageWrap>
        <Styled.MenuListItemImage src={image} />
      </Styled.MenuImageWrap>
      <Styled.MenuListItemTitle>{name}</Styled.MenuListItemTitle>
      <Styled.MenuListItemDescription>{description}</Styled.MenuListItemDescription>
      <Styled.MenuParamWrap>
        <Styled.MenuListItemParam>{price}uah</Styled.MenuListItemParam>
        <Styled.MenuListItemParam>{weight}g</Styled.MenuListItemParam>
      </Styled.MenuParamWrap>
      {isAdmin ? (
        <Styled.ButtonWrap>
          <Styled.MenuListItemButton>Edit</Styled.MenuListItemButton>
          <Styled.MenuListDeleteButton onClick={handleDelete}>Delete</Styled.MenuListDeleteButton>
        </Styled.ButtonWrap>
      ) : (
        <Styled.ButtonWrap>
          <Styled.MenuListItemButton>TO CART</Styled.MenuListItemButton>
        </Styled.ButtonWrap>
      )}
    </Styled.MenuListItemContainer>
  );
};

export default MenuListItem;
