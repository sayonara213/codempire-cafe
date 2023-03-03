import React from 'react';
import * as Styled from './user.styled';
import { IMAGES } from './../../../constants/images';
import { useAppSelector } from '../../../hooks/hooks';

const User: React.FC = () => {
  const user = useAppSelector((store) => store.user);

  return (
    <Styled.UserWrap>
      <Styled.UserTextWrap>
        <Styled.UserRole>{user.role}</Styled.UserRole>
        <Styled.UserName>{user.email}</Styled.UserName>
      </Styled.UserTextWrap>
      <Styled.UserImageWrap>
        <Styled.UserImage src={IMAGES.testUser} />
      </Styled.UserImageWrap>
    </Styled.UserWrap>
  );
};

export default User;
