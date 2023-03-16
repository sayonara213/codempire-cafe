import React, { useRef } from 'react';
import * as Styled from './profile.styled';
import { MainContainer } from '../main/main.styled';
import { IMAGES } from './../../constants/images';
import { useAppSelector } from '../../hooks/hooks';
import { madeCompressedBase64 } from '../../services/images.service';
import { useAppDispatch } from './../../hooks/hooks';
import { apiUpdate } from '../../services/api.service';
import { setPhoto, logOut } from '../../redux/user.slice';
import Button from './../global/Button/button';

const settingsList = [
  {
    section: {
      title: 'Settings',
    },
    items: [
      {
        title: 'Privacy policy',
      },
      {
        title: 'Change password',
      },
      {
        title: 'Delete account',
      },
      {
        title: 'Orders',
      },
    ],
  },
  {
    section: {
      title: 'Address',
    },
    items: [
      {
        title: '2464 Royal Ln. Mesa, New Jersey 45463',
      },
      {
        title: '2464 Royal Ln. Mesa, New Jersey 45463',
      },
    ],
  },
];

const Profile: React.FC = () => {
  const [avatar, setAvatar] = React.useState<string>(IMAGES.testUser);
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const uploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    console.log(file);

    dispatch(setPhoto(URL.createObjectURL(file)));
    if (file) {
      madeCompressedBase64(file, (dataUrl) => {
        apiUpdate('http://localhost:5000/user/photo', user.id, { photo: dataUrl });
      });
    }
  };

  const logout = () => {
    dispatch(logOut());
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <MainContainer>
      <Styled.UserPageWrap>
        <Styled.UserInfoWrap>
          <Styled.UserAvatarWrap>
            <Styled.UserAvatar src={user.image} onClick={handleClick} />
            <Styled.UserAvatarEdit type={'file'} ref={inputRef} onChange={uploadAvatar} />
          </Styled.UserAvatarWrap>
          <Styled.UserPageUsername>{user.name}</Styled.UserPageUsername>
          <Styled.UserPageRole>{user.role}</Styled.UserPageRole>
          <Styled.UserPagePhone>{user.phone}</Styled.UserPagePhone>
        </Styled.UserInfoWrap>
        <Styled.UserSettingsWrap>
          {settingsList.map((settingsItem, index) => (
            <Styled.UserSettingsSection>
              <Styled.UserSettingsTitle>{settingsItem.section.title}</Styled.UserSettingsTitle>
              {settingsItem.items.map((item, index) => (
                <Styled.UserSettingsItemWrap key={index}>
                  <Styled.UserSettingsItemTitle>{item.title}</Styled.UserSettingsItemTitle>
                </Styled.UserSettingsItemWrap>
              ))}
            </Styled.UserSettingsSection>
          ))}
          <Button type='button' isActive={true} isCancel={true} onClick={logout}>
            SIGN OUT
          </Button>
        </Styled.UserSettingsWrap>
      </Styled.UserPageWrap>
    </MainContainer>
  );
};

export default Profile;
