import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import Button from '../../global/Button/button';
import Input from '../../global/Input/input';
import { ModalFooter } from '../profile-modal/profile-modal.styled';
import * as Styled from './address-modal.styled';
import CheckBox from './../../global/CheckBox/checkbox';
import { useAppDispatch } from './../../../hooks/hooks';
import { addAddress, setAddresses, toggleAddressActive } from '../../../redux/user.slice';
import { apiPost, apiUpdate } from '../../../services/api.service';
import { API_URL } from '../../../constants/url';
import { IAddress } from '../../../types/types.user';
import { promiseToast } from '../../../notifications/notifications';
import { IMAGES } from './../../../constants/images';
import { apiDelete } from './../../../services/api.service';

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
      const promise = apiPost(`${API_URL.ADDRESS}/${id}`, {
        addressName: search,
        isActive: true,
      });
      promiseToast(promise, 'Adding address', 'Address added', 'Error adding address');

      const response = await promise;
      dispatch(addAddress(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveAddress = (addressId: string): void => {
    try {
      const promise = apiDelete(API_URL.ADDRESS, addressId);
      promiseToast(promise, 'Removing address', 'Address removed', 'Error removing address');
      const filteredAddresses = searchedAddresses.filter((item) => item.id !== addressId);
      dispatch(setAddresses(filteredAddresses));
    } catch {
      console.log('error');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      if (search.length > 0 && searchedAddresses.length === 0) {
        handleNewAddress();
      }
    }
  };

  if (!addresses) return <div>loading...</div>;

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
        {searchedAddresses?.map((item) => (
          <Styled.AddressItemWrap key={item.addressName}>
            <CheckBox
              label={item.addressName}
              checked={item.isActive}
              value={item.id}
              onchange={handleToggle}
            />
            <Styled.AddressRemoveButton
              src={IMAGES.close}
              onClick={handleRemoveAddress.bind(null, item.id)}
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
