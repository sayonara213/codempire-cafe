import React, { useEffect, useState } from 'react';

import * as Styled from './cart-item.styled';
import {
  decrementItemQuantity,
  ICart,
  incrementItemQuantity,
  removeItemFromCart,
} from '../../../../redux/cart.slice';
import { apiGet } from './../../../../services/api.service';
import { API_URL } from '../../../../constants/url';
import { IMenu } from './../../../../types/types.menu';
import { IProduct } from './../../../../types/types.products';
import { useAppDispatch } from '../../../../hooks/hooks';

interface CartItemProps {
  item: ICart;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [fetchedItem, setFetchedItem] = useState<IMenu | IProduct>({} as IMenu | IProduct);

  const dispatch = useAppDispatch();

  const fetchItem = async (item: ICart) => {
    if (item.isProduct) {
      const fetchedProduct = await apiGet(API_URL.GET_PRODUCT_BY_ID + item.id);
      setFetchedItem(fetchedProduct.data);
    } else {
      const fetchedMenu = await apiGet(API_URL.GET_MENU + item.id);
      setFetchedItem(fetchedMenu.data);
    }
  };

  useEffect(() => {
    fetchItem(item);
  }, []);

  const incrementQuantity = () => {
    dispatch(incrementItemQuantity(item));
  };

  const decrementQuantity = () => {
    dispatch(decrementItemQuantity(item));
  };

  const removeItem = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <Styled.CartItemContainer>
      <Styled.CartItemSection>
        <Styled.CartItemInfo>
          <Styled.CartItemImage src={fetchedItem.image} />
          <Styled.CartItemDelete onClick={removeItem}>REMOVE</Styled.CartItemDelete>
        </Styled.CartItemInfo>
        <Styled.CartItemInfo>
          <Styled.CartItemName>{fetchedItem.name}</Styled.CartItemName>
          <Styled.CartItemDescription>{fetchedItem.description}</Styled.CartItemDescription>
        </Styled.CartItemInfo>
      </Styled.CartItemSection>
      <Styled.CartItemSection>
        <Styled.CartItemInfo>
          <Styled.CartItemQuantityWrap>
            <Styled.CartItemQuantityButton onClick={decrementQuantity}>
              -
            </Styled.CartItemQuantityButton>
            <Styled.CartItemQuantity>{item.quantity}</Styled.CartItemQuantity>
            <Styled.CartItemQuantityButton onClick={incrementQuantity}>
              +
            </Styled.CartItemQuantityButton>
          </Styled.CartItemQuantityWrap>
          <Styled.CartItemPrice>{fetchedItem.price * item.quantity}uah</Styled.CartItemPrice>
        </Styled.CartItemInfo>
      </Styled.CartItemSection>
    </Styled.CartItemContainer>
  );
};

export default CartItem;
