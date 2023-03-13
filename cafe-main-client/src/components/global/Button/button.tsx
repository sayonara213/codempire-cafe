import React from 'react';
import * as Styled from './button.styled';

interface ButtonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isActive: boolean;
  children: JSX.Element | JSX.Element[] | string | string[];
  isCancel?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type, isActive, isCancel }) => {
  return (
    <Styled.ButtonBody isActive={isActive} type={type} isCancel={isCancel}>
      <Styled.ButtonSpan>{children}</Styled.ButtonSpan>
    </Styled.ButtonBody>
  );
};

export default Button;
