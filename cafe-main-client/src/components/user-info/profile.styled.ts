import styled from 'styled-components';
import { IMAGES } from './../../constants/images';

export const UserPageWrap = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const UserInfoWrap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const UserAvatarWrap = styled.div`
  margin-bottom: 40px;

  width: 220px;
  height: 220px;

  border-radius: 50%;
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserAvatarEdit = styled.input`
  display: none;
`;

export const UserPageUsername = styled.h2`
  margin-bottom: 15px;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.color.text};
`;

export const UserPageRole = styled.p`
  margin-bottom: 15px;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.footer};
  color: ${({ theme }) => theme.color.text};
`;

export const UserPagePhone = styled.h3`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

export const UserSettingsWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const UserSettingsSection = styled.div`
  padding: 20px 20px 0 20px;
  box-shadow: -1px 3px 6px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`;

export const UserSettingsTitle = styled.h2`
  margin-bottom: 20px;

  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

export const UserSettingsItemWrap = styled.div`
  padding: 20px 20px 20px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.color.selectItem};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    &::after {
      transform: rotate(90deg);
    }
  }

  &::after {
    content: url(${IMAGES.arrow});
    transition: transform 0.3s ease-in-out;
  }

  cursor: pointer;
`;

export const UserSettingsItemTitle = styled.h3`
  margin-left: 10px;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;
