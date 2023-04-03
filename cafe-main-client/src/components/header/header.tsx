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
import NotificationsModal from '../modals/notifications-modal/notifications.modal';
import { ROUTES } from './../../constants/routes';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((store) => store.menuList.search);
  const cart = useAppSelector((store) => store.cart);
  const notifications = useAppSelector((store) => store.notifications.notificationsList);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [isCart, setIsCart] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const handleShowNotifications = () => {
    setShowNotifications(true);
  };

  const showCart = () => {
    setIsCart(true);
  };

  const closeCart = () => {
    setIsCart(false);
  };

  const location = useLocation();

  const checkIfUnreadNotifications = () => {
    return notifications.some((notification) => notification.isSeen === false);
  };

  if (
    location.pathname === ROUTES.login ||
    location.pathname === ROUTES.register ||
    location.pathname === ROUTES.registerAdditional
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
        <CartModal closeModal={closeCart} />
      </GlobalModal>
      {showNotifications && (
        <GlobalModal
          isOpen={showNotifications}
          onChange={setShowNotifications}
          modalName={'Notifications'}>
          <NotificationsModal />
        </GlobalModal>
      )}
      <Styled.HeaderWrapper>
        <Styled.HeaderLogo src={IMAGES.logo} />
        <Styled.HeaderIcon
          src={checkIfUnreadNotifications() ? IMAGES.bellNotification : IMAGES.bell}
          onClick={handleShowNotifications}
        />
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
      <Styled.HeaderUserWrap>
        <User />
      </Styled.HeaderUserWrap>
    </Styled.HeaderContainer>
  );
};

export default Header;
