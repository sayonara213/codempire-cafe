import React, { useEffect } from 'react';
import * as Styled from './profile-modal.styled';
import Input from '../../global/Input/input';
import { useFormik } from 'formik';
import {
  validationSchemaAdditional,
  validationSchemaPassword,
} from '../../../constants/validation/validation';
import { apiUpdate } from '../../../services/api.service';
import { API_URL } from '../../../constants/url';
import Button from '../../global/Button/button';
import { useAppSelector } from '../../../hooks/hooks';
import { useAppDispatch } from './../../../hooks/hooks';
import { setUser } from '../../../redux/user.slice';

interface ProfileModalProps {
  isPasswordReset?: boolean;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isPasswordReset }) => {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const initialValues = isPasswordReset
    ? {
        oldPassword: '',
        newPassword: '',
      }
    : {
        username: user.name,
        email: user.email,
        phone: user.phone,
      };

  const onSubmitPassword = async (formData: any) => {
    try {
      await apiUpdate(API_URL.UPDATE_PASSWORD, user.id, formData);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitProfile = async (formData: any) => {
    try {
      await apiUpdate(API_URL.UPDATE_USER, user.id, formData);
      dispatch(
        setUser({
          id: user.id,
          name: formData.username,
          email: formData.email,
          phone: formData.phone,
          image: user.image,
          role: user.role,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: isPasswordReset ? validationSchemaPassword : validationSchemaAdditional,
    onSubmit: isPasswordReset ? onSubmitPassword : onSubmitProfile,
  });

  const inputsPassword = [
    {
      type: 'password',
      placeholder: 'Old password',
      value: formik.values.oldPassword,
      name: 'oldPassword',
    },
    {
      type: 'password',
      placeholder: 'New password',
      value: formik.values.newPassword,
      name: 'newPassword',
    },
  ];

  const inputsProfile = [
    {
      type: 'text',
      placeholder: 'Username',
      value: formik.values.username,
      name: 'username',
    },
    {
      type: 'text',
      placeholder: 'Email',
      value: formik.values.email,
      name: 'email',
    },
    {
      type: 'text',
      placeholder: 'Phone',
      value: formik.values.phone,
      name: 'phone',
    },
  ];

  const inputs = isPasswordReset ? inputsPassword : inputsProfile;

  return (
    <Styled.PasswordModalWrap>
      <Styled.PasswordForm onSubmit={formik.handleSubmit}>
        {inputs.map((input, index) => (
          <Input
            key={index}
            isLight={true}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            isPlaceholder={false}
            onchange={formik.handleChange}
            name={input.name}
          />
        ))}
        <Styled.ModalFooter>
          <Button type={'button'} isActive={true} isCancel={true}>
            SKIP
          </Button>
          <Button type={'submit'} isActive={true}>
            CREATE
          </Button>
        </Styled.ModalFooter>
      </Styled.PasswordForm>
    </Styled.PasswordModalWrap>
  );
};

export default ProfileModal;
