import React from 'react';
import * as Styled from './button.styled';

interface ButtonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isActive: boolean;
  children: JSX.Element | JSX.Element[] | string | string[];
  isCancel?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, isActive, isCancel, onClick }) => {
  return (
    <Styled.ButtonBody isActive={isActive} type={type} isCancel={isCancel} onClick={onClick}>
      <Styled.ButtonSpan>{children}</Styled.ButtonSpan>
    </Styled.ButtonBody>
  );
};

export default Button;
