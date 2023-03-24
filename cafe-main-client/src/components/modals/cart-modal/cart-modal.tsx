import React, { useEffect } from 'react';
import * as Styled from './cart-modal.styled';
import Button from './../../global/Button/button';
import CartItem from './cart-item/cart-item';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setTotalPrice } from '../../../redux/cart.slice';

const CartModal: React.FC = () => {
  const cart = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const totalPrice = cart.cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    dispatch(setTotalPrice(totalPrice));
  }, [cart]);

  if (cart.cartItems.length === 0) {
    return (
      <Styled.CartModalContainer>
        <Styled.CartModalBody>
          <Styled.CartText>Your cart is empty</Styled.CartText>
        </Styled.CartModalBody>
      </Styled.CartModalContainer>
    );
  }

  return (
    <Styled.CartModalContainer>
      <Styled.CartModalBody>
        {cart.cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </Styled.CartModalBody>
      <Styled.CartModalFooter>
        <Styled.FooterPriceWrap>
          <Styled.FooterPriceTitle>Total:</Styled.FooterPriceTitle>
          <Styled.FooterPriceValue>{cart.totalPrice}uah</Styled.FooterPriceValue>
        </Styled.FooterPriceWrap>
        <Styled.FooterButtonWrap>
          <Button type={'button'} isActive={true} isCancel={true}>
            CANCEL
          </Button>
          <Button type={'button'} isActive={true}>
            ORDER
          </Button>
        </Styled.FooterButtonWrap>
      </Styled.CartModalFooter>
    </Styled.CartModalContainer>
  );
};

export default CartModal;
