import React, { useEffect } from 'react';
import * as Styled from './profile.styled';
import { MainContainer } from '../main/main.styled';
import Button from './../global/Button/button';
import GlobalModal from '../modals/modal';
import { useProfileState } from './profile.state';

const Profile: React.FC = () => {
  const {
    isModal,
    setIsModal,
    modalName,
    user,
    inputRef,
    handleClick,
    modalSwitch,
    uploadAvatar,
    logout,
    settingsList,
    activeAddresses,
    handleAddressModal,
    fetchUser,
  } = useProfileState();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <MainContainer>
      <GlobalModal isOpen={isModal} onChange={setIsModal} modalName={modalName}>
        {modalSwitch[modalName]}
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
          <Styled.UserSettingsSection onClick={handleAddressModal}>
            <Styled.UserSettingsTitle>Address</Styled.UserSettingsTitle>
            {activeAddresses.map((item, index) => (
              <Styled.UserSettingsItemWrap key={index} onClick={handleAddressModal}>
                <Styled.UserSettingsItemTitle>{item.addressName}</Styled.UserSettingsItemTitle>
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
