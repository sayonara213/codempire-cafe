import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './header.styled';
import User from './user/user';
import { IMAGES } from './../../constants/images';
import Input from '../global/Input/input';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearch } from '../../redux/menuList.slice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((store) => store.menuList.search);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
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
      <Styled.HeaderWrapper>
        <Styled.HeaderLogo src={IMAGES.logo} />
        <Styled.HeaderIcon src={IMAGES.bell} />
        <Styled.HeaderIcon src={IMAGES.cart} />
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
