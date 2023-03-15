import React from 'react';
import * as Styled from './menu-list-item.styled';
import { apiDelete } from './../../../../services/api.service';
import { API_URL } from '../../../../constants/url';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './../../../../constants/routes';

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
  const navigate = useNavigate();

  const handleDelete = () => {
    apiDelete(API_URL.DELETE, id);
  };

  const showInfo = () => {
    isProduct ? navigate('/product/' + id) : navigate(id);
  };

  return (
    <Styled.MenuListItemContainer onClick={showInfo}>
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
