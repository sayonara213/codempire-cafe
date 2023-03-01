import React from 'react';
import * as Styled from './header.styled';

interface HeaderProps {
  location: string;
}

const Header: React.FC<HeaderProps> = ({ location }) => {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderAuth>{location === '/login' ? 'log in' : 'sign up'}</Styled.HeaderAuth>
    </Styled.HeaderContainer>
  );
};

export default Header;
