import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './header.styled';
import User from './user/user';
import { IMAGES } from './../../constants/images';
import Input from '../global/Input/input';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearch } from '../../redux/menuList.slice';
import GlobalModal from './../modals/modal';
import CartModal from './../modals/cart-modal/cart-modal';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((store) => store.menuList.search);
  const cart = useAppSelector((store) => store.cart);
  const [isCart, setIsCart] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const showCart = () => {
    setIsCart(true);
  };

  const location = useLocation();

  if (
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/register/additional'
  )
    return (
      <Styled.HeaderContainer>
        <Styled.HeaderAuth>
          {location.pathname === '/login' ? 'log in' : 'sign up'}
        </Styled.HeaderAuth>
      </Styled.HeaderContainer>
    );

  return (
    <Styled.HeaderContainer>
      <GlobalModal isOpen={isCart} onChange={setIsCart} modalName={'Cart'}>
        <CartModal />
      </GlobalModal>
      <Styled.HeaderWrapper>
        <Styled.HeaderLogo src={IMAGES.logo} />
        <Styled.HeaderIcon src={IMAGES.bell} />
        <Styled.HeaderIcon
          src={cart.cartItems.length > 0 ? IMAGES.cartNotification : IMAGES.cart}
          onClick={showCart}
        />
        <Styled.HeaderFormWrap>
          <Input
            placeholder={'Search...'}
            isPlaceholder={false}
            value={value}
            onchange={onChange}
            isLight={false}
            icon={IMAGES.find}
          />
        </Styled.HeaderFormWrap>
      </Styled.HeaderWrapper>
      <User />
    </Styled.HeaderContainer>
  );
};

export default Header;
