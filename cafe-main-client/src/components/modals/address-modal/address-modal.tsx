import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import Button from '../../global/Button/button';
import Input from '../../global/Input/input';
import { ModalFooter } from '../profile-modal/profile-modal.styled';
import * as Styled from './address-modal.styled';
import CheckBox from './../../global/CheckBox/checkbox';
import { useAppDispatch } from './../../../hooks/hooks';
import { addAddress, toggleAddressActive } from '../../../redux/user.slice';
import { apiPost, apiUpdate } from '../../../services/api.service';
import { API_URL } from '../../../constants/url';
import { IAddress } from '../../../types/types.user';

interface AddressModalProps {
  closeModal?: () => void;
}

const AddressModal: React.FC<AddressModalProps> = ({ closeModal }) => {
  const [search, setSearch] = useState<string>('');
  const [searchedAddresses, setSearchedAddresses] = useState<IAddress[]>([]);

  const { addresses, id } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search && search.length > 0) {
      const filteredAddresses = addresses.filter((item) => {
        return item.addressName.toLowerCase().includes(search.toLowerCase());
      });
      setSearchedAddresses(filteredAddresses);
    } else {
      setSearchedAddresses(addresses);
    }
  }, [search, addresses]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      dispatch(toggleAddressActive({ addressId: e.target.value, isActive: e.target.checked }));
      apiUpdate(API_URL.ADDRESS, e.target.value, { isActive: e.target.checked });
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewAddress = async (): Promise<void> => {
    try {
      const response = await apiPost(`${API_URL.ADDRESS}/${id}`, {
        addressName: search,
        isActive: true,
      });
      dispatch(addAddress(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      if (search.length > 0 && searchedAddresses.length === 0) {
        handleNewAddress();
      }
    }
  };

  return (
    <Styled.AddressModalWrap>
      <Styled.AddressModalInputWrap>
        <Input
          placeholder={'Address'}
          type={'text'}
          isPlaceholder={false}
          value={search}
          isLight={true}
          onchange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Styled.AddressModalInputWrap>
      <Styled.AddressListWrap>
        {searchedAddresses.map((item, index) => (
          <Styled.AddressItemWrap key={index}>
            <CheckBox
              label={item.addressName}
              checked={item.isActive}
              value={item.id}
              onchange={handleToggle}
            />
          </Styled.AddressItemWrap>
        ))}
      </Styled.AddressListWrap>
      <ModalFooter>
        <Button type={'button'} isActive={true} isCancel={true} onClick={closeModal}>
          CANCEL
        </Button>
        <Button type={'submit'} isActive={true} onClick={closeModal}>
          SAVE
        </Button>
      </ModalFooter>
    </Styled.AddressModalWrap>
  );
};

export default AddressModal;
