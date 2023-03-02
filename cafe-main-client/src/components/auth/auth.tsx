import React from 'react';

import { useFormik } from 'formik';

import { validationSchema } from '../../constants/validation/validation';
import { IMAGES } from '../../constants/images';

import * as Styled from './auth.styled';
import Input from '../global/Input/input';
import Button from '../global/Button/button';
import { login, register } from '../../services/auth.service';
import { AuthProps, FormValues } from '../../types/types.auth';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './../../constants/routes';

const Auth: React.FC<AuthProps> = ({ isLogin }) => {
  const navigate = useNavigate();
  const formInputs = ['Email', 'Password'];
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (formsData: FormValues) => {
      const user = isLogin ? await login(formsData) : await register(formsData);
      if (user) {
        navigate(ROUTES.menu);
      }
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
            <Styled.AuthAdditional to={'/'}>Forgot password?</Styled.AuthAdditional>
            <Styled.AuthAdditional to={ROUTES.register}>Sign up</Styled.AuthAdditional>
          </Styled.AuthAdditionalWrap>
        ) : (
          <Styled.LoginWrap>
            <Styled.AuthAdditional to={ROUTES.login}>Log in</Styled.AuthAdditional>
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
