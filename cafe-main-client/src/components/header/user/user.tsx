import React from 'react';
import * as Styled from './user.styled';
import { IMAGES } from './../../../constants/images';
import { useAppSelector } from '../../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './../../../constants/routes';

const User: React.FC = () => {
  const user = useAppSelector((store) => store.user);
  const navigate = useNavigate();

  const authorize = () => {
    navigate(ROUTES.register);
  };

  const profile = () => {
    navigate(ROUTES.profile);
  };

  if (user.id === '') {
    return (
      <Styled.UserWrap onClick={authorize}>
        <Styled.UserTextWrap>
          <Styled.UserRole>Authorize</Styled.UserRole>
        </Styled.UserTextWrap>
      </Styled.UserWrap>
    );
  }

  return (
    <Styled.UserWrap onClick={profile}>
      <Styled.UserTextWrap>
        <Styled.UserRole>{user.role}</Styled.UserRole>
        <Styled.UserName>{user.name}</Styled.UserName>
      </Styled.UserTextWrap>
      <Styled.UserImageWrap>
        <Styled.UserImage src={user.image} />
      </Styled.UserImageWrap>
    </Styled.UserWrap>
  );
};

export default User;
