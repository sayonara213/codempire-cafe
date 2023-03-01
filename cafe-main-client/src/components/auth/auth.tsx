import React from 'react';

import { useFormik } from 'formik';

import { validationSchema } from '../../constants/validation/validation';
import { IMAGES } from '../../constants/images';

import * as Styled from './auth.styled';
import Input from '../global/Input/input';
import Button from '../global/Button/button';
import { AuthAdditional } from './auth.styled';

interface FormValues {
  [key: string]: string;
  email: string;
  password: string;
}

interface AuthProps {
  isLogin: boolean;
}

const Auth: React.FC<AuthProps> = ({ isLogin }) => {
  const formInputs = ['Email', 'Password'];
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (formsData: FormValues) => {
    console.log(formsData);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Styled.AuthContainer>
      <Styled.AuthWrap onSubmit={formik.handleSubmit}>
        <Styled.AuthTitleWrap>
          <Styled.Logo src={IMAGES.logo} />
        </Styled.AuthTitleWrap>
        {formInputs.map((input, index) => (
          <Input
            key={index}
            placeholder={input}
            value={formik.values[input.toLowerCase()]}
            onchange={formik.handleChange}
            isPassword={input === 'Password'}
          />
        ))}
        {isLogin ? (
          <Styled.AuthAdditionalWrap>
            <AuthAdditional to={'/'}>Forgot password?</AuthAdditional>
            <AuthAdditional to={'/sign-up'}>Sign up</AuthAdditional>
          </Styled.AuthAdditionalWrap>
        ) : (
          <Styled.LoginWrap>
            <AuthAdditional to={'/login'}>Log in</AuthAdditional>
          </Styled.LoginWrap>
        )}
        <Button type={'submit'} isActive={!formik.errors.email && !formik.errors.password}>
          {isLogin ? 'LOG IN' : 'CREATE'}
        </Button>
        <Styled.SkipAuth>SKIP</Styled.SkipAuth>
      </Styled.AuthWrap>
    </Styled.AuthContainer>
  );
};

export default Auth;
