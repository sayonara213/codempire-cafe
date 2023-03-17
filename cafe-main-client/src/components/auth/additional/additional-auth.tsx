import React from 'react';

import { AuthContainer, AuthInputWrap, AuthWrap, SkipAuth } from './../auth.styled';
import * as Styled from './additional-auth.styled';
import Input from './../../global/Input/input';
import Button from '../../global/Button/button';
import { useFormik } from 'formik';
import { apiUpdate } from '../../../services/api.service';
import { API_URL } from './../../../constants/url';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { setNameAndPhone } from '../../../redux/user.slice';
import { ROUTES } from '../../../constants/routes';
import { validationSchemaAdditional } from '../../../constants/validation/validation';

interface AdditionalAuth {
  username: string;
  phone: string;
}

const AdditionalAuth: React.FC = () => {
  const userId = useAppSelector((store) => store.user.id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues = {
    username: '',
    phone: '',
  };

  const skip = () => {
    navigate(ROUTES.menu);
  };

  const onSubmit = async (formsData: AdditionalAuth) => {
    try {
      await apiUpdate(API_URL.REGISTER_ADDITIONAL, userId, formsData);
      dispatch(setNameAndPhone(formsData));
      navigate('/menu');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchemaAdditional,
  });

  return (
    <AuthContainer>
      <Styled.AdditionalWrapper>
        <Styled.AdditionalHeading>Welcome!</Styled.AdditionalHeading>
        <Styled.AdditionalSubHeading>Just one little step left</Styled.AdditionalSubHeading>
      </Styled.AdditionalWrapper>
      <AuthWrap onSubmit={formik.handleSubmit}>
        <AuthInputWrap>
          <Input
            placeholder='Username'
            value={formik.values.username}
            onchange={formik.handleChange}
            isPlaceholder={true}
            isLight={true}
          />
        </AuthInputWrap>
        <AuthInputWrap>
          <Input
            placeholder='Phone'
            value={formik.values.phone}
            onchange={formik.handleChange}
            isPlaceholder={true}
            isLight={true}
            type='tel'
          />
        </AuthInputWrap>
        <Styled.ButtonContainer>
          <Button type={'submit'} isActive={true}>
            Proceed
          </Button>
          <SkipAuth onClick={skip}>SKIP</SkipAuth>
        </Styled.ButtonContainer>
      </AuthWrap>
    </AuthContainer>
  );
};

export default AdditionalAuth;
