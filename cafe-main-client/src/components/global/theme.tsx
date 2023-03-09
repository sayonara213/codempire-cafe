import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { PropsWithChildren } from 'react';
import React from 'react';
import { reset } from '../../constants/reset';
import { normalize } from '../../constants/normalize';
export const FONT_SIZE = {
  footer: '12px',
  small: '14px',
  medium: '16px',
  big: '20px',
  large: '24px',
};
export const FONT = {
  thin: 'thin',
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  bold: 'bold',
  black: 'black',
};
export const COLOR = {
  background: '#E5E5E5',
  dark: '#131316',
  text: '#000000',
  light: '#c2c2c3',
  white: '#FFFFFF',
  border: '#e0e0e0',
  borderDark: '#303032',
  notActive: '#AAADB3',
  selectItem: '#eeeeee',
  purple: '#6200EE',
  red: '#ff0000',
};
export const BORDER_RADIUS = {
  small: '4px',
  medium: '15px',
  large: '20px',
  circle: '50%',
};

export const theme = {
  fontSize: FONT_SIZE,
  font: FONT,
  borderRadius: BORDER_RADIUS,
  color: COLOR,
};

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
  body {
    background: ${COLOR.white};
  }
`;

export const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
