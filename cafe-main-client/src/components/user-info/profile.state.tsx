import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { API_URL } from '../../constants/url';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setAddresses, setPhoto, logOut } from '../../redux/user.slice';
import { apiGet, apiUpdate } from '../../services/api.service';
import { madeCompressedBase64 } from '../../services/images.service';
import { IAddress } from '../../types/types.user';
import AddressModal from '../modals/address-modal/address-modal';
import DeleteModal from '../modals/delete-modal/delete-modal';
import ProfileModal from '../modals/profile-modal/profile-modal';

export const useProfileState = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalName, setModalName] = useState('Change password');
  const [activeAddresses, setActiveAddresses] = useState<IAddress[]>([]);

  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user.addresses) {
      const tempAddresses = user.addresses.filter((item) => item.isActive);
      setActiveAddresses(tempAddresses);
    }
  }, [user.addresses]);

  const fetchAddresses = async () => {
    const addresses = await apiGet(API_URL.GET_ADDRESS_BY_USER_ID + user.id);
    dispatch(setAddresses(addresses.data));
  };

  const handleModal = (value: string) => {
    setIsModal(true);
    setModalName(value);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleClose = () => {
    setIsModal(false);
  };

  const modalSwitch = () => {
    switch (modalName) {
      case 'Change password':
        return <ProfileModal isPasswordReset={true} closeModal={handleClose} />;
      case 'Edit profile':
        return <ProfileModal isPasswordReset={false} closeModal={handleClose} />;
      case 'Delete account':
        return <DeleteModal closeModal={handleClose} />;
      case 'Addresses':
        return <AddressModal closeModal={handleClose} />;
      default:
        return <ProfileModal isPasswordReset={true} closeModal={handleClose} />;
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

  const handleAddressModal = () => {
    handleModal('Addresses');
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

  return {
    isModal,
    setIsModal,
    modalName,
    setModalName,
    user,
    inputRef,
    fetchAddresses,
    handleModal,
    handleClick,
    modalSwitch,
    uploadAvatar,
    logout,
    settingsList,
    activeAddresses,
    handleAddressModal,
  };
};
