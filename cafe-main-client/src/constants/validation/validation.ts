import * as Yup from 'yup';
import { REGEXPS } from './regexp';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .max(50, 'Too long email')
    .trim()
    .required("Enter user's email")
    .matches(REGEXPS.email, 'Please enter valid email'),
  password: Yup.string()
    .max(30, 'Too long password')
    .trim()
    .required("Enter user's password")
    .matches(REGEXPS.password, 'Please enter valid password'),
});

export const validationSchemaAdditional = Yup.object().shape({
  username: Yup.string()
    .max(30, 'Too long username')
    .trim()
    .required("Enter user's username")
    .matches(REGEXPS.username, 'Please enter valid username'),

  phone: Yup.string()
    .max(30, 'Too long phone')
    .trim()
    .required("Enter user's phone")
    .matches(REGEXPS.phone, 'Please enter valid phone'),
});

export const validationSchemaPassword = Yup.object().shape({
  oldPassword: Yup.string()
    .max(30, 'Too long password')
    .trim()
    .required("Enter user's password")
    .matches(REGEXPS.password, 'Please enter valid password'),
  newPassword: Yup.string()
    .max(30, 'Too long password')
    .trim()
    .required("Enter user's password")
    .matches(REGEXPS.password, 'Please enter valid password'),
});
