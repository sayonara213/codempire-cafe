import React from 'react';
import * as Styled from './button.styled';

interface ButtonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isActive: boolean;
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Button: React.FC<ButtonProps> = ({ children, type, isActive }) => {
  return (
    <Styled.ButtonBody isActive={isActive} type={type}>
      <Styled.ButtonSpan>{children}</Styled.ButtonSpan>
    </Styled.ButtonBody>
  );
};

export default Button;
