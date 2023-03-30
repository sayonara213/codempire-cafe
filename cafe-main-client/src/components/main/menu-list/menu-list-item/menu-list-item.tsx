import React from 'react';

import { apiDelete } from './../../../../services/api.service';
import { API_URL } from '../../../../constants/url';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './../../../../constants/routes';

import * as Styled from './menu-list-item.styled';
import { useAppDispatch } from './../../../../hooks/hooks';
import { addItemToCart } from '../../../../redux/cart.slice';

interface MenuListItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  weight: number;
  isAdmin: boolean;
  id: string;
  isProduct: boolean;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
  name,
  description,
  price,
  image,
  isAdmin,
  weight,
  id,
  isProduct,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    isProduct ? apiDelete(API_URL.DELETE_PRODUCT, id) : apiDelete(API_URL.DELETE_MENU, id);
  };

  const addToCart = () => {
    const item = {
      id: id,
      quantity: 1,
      price: price,
      isProduct: isProduct,
    };
    dispatch(addItemToCart(item));
  };

  const showInfo = () => {
    isProduct ? navigate(ROUTES.product + id) : navigate(ROUTES.menu + id);
  };

  return (
    <Styled.MenuListItemContainer>
      <Styled.MenuImageWrap onClick={showInfo}>
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
          <Styled.MenuListItemButton onClick={addToCart}>TO CART</Styled.MenuListItemButton>
        </Styled.ButtonWrap>
      )}
    </Styled.MenuListItemContainer>
  );
};

export default MenuListItem;
