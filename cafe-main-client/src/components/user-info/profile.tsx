import React, { useRef, useState } from 'react';
import * as Styled from './profile.styled';
import { MainContainer } from '../main/main.styled';
import { useAppSelector } from '../../hooks/hooks';
import { madeCompressedBase64 } from '../../services/images.service';
import { useAppDispatch } from './../../hooks/hooks';
import { apiUpdate } from '../../services/api.service';
import { setPhoto, logOut } from '../../redux/user.slice';
import Button from './../global/Button/button';
import { API_URL } from '../../constants/url';
import GlobalModal from '../modals/modal';
import ProfileModal from './../modals/profile-modal/profile-modal';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import DeleteModal from '../modals/delete-modal/delete-modal';

const Profile: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalName, setModalName] = useState('Change password');
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleModal = (value: string) => {
    setIsModal(true);
    setModalName(value);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const modalSwitch = () => {
    switch (modalName) {
      case 'Change password':
        return <ProfileModal isPasswordReset={true} />;
      case 'Edit profile':
        return <ProfileModal isPasswordReset={false} />;
      case 'Delete account':
        return <DeleteModal />;
      default:
        return <ProfileModal isPasswordReset={true} />;
    }
  };

  const uploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];

    dispatch(setPhoto(URL.createObjectURL(file)));
    if (file) {
      madeCompressedBase64(file, (dataUrl) => {
        apiUpdate(API_URL.ADD_AVATAR, user.id, { photo: dataUrl });
      });
    }
  };

  const logout = () => {
    dispatch(logOut());
    localStorage.removeItem('token');
    window.location.reload();
  };

  const settingsList = [
    {
      title: 'Privacy policy',
      onclick: () => window.open('https://loremipsum.io/privacy-policy/'),
    },
    {
      title: 'Change password',
      onclick: () => handleModal('Change password'),
    },
    {
      title: 'Edit profile',
      onclick: () => handleModal('Edit profile'),
    },
    {
      title: 'Delete account',
      onclick: () => handleModal('Delete account'),
    },
    {
      title: 'Orders',
      onclick: () => navigate(ROUTES.orders),
    },
  ];

  return (
    <MainContainer>
      <GlobalModal isOpen={isModal} onChange={setIsModal} modalName={modalName}>
        {modalSwitch()}
      </GlobalModal>
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
          <Styled.UserSettingsSection>
            <Styled.UserSettingsTitle>Settings</Styled.UserSettingsTitle>
            {settingsList.map((item, index) => (
              <Styled.UserSettingsItemWrap key={index} onClick={item.onclick}>
                <Styled.UserSettingsItemTitle>{item.title}</Styled.UserSettingsItemTitle>
              </Styled.UserSettingsItemWrap>
            ))}
          </Styled.UserSettingsSection>
          <Button type='button' isActive={true} isCancel={true} onClick={logout}>
            SIGN OUT
          </Button>
        </Styled.UserSettingsWrap>
      </Styled.UserPageWrap>
    </MainContainer>
  );
};
export default Profile;
