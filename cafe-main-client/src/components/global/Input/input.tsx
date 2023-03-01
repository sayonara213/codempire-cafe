import React, { useEffect } from 'react';

import * as Styled from './input.styled';
import { IMAGES } from '../../../constants/images';

interface InputProps {
  placeholder: string;
  value: any;
  onchange: React.ChangeEventHandler<HTMLInputElement>;

  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onchange, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);

  useEffect(() => {
    if (value !== '') {
      setIsSelected(true);
    }
  }, [value]);

  const changePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onFocused = () => {
    setIsSelected(true);
  };
  const onBlurred = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value === '' && setIsSelected(false);
  };

  return (
    <Styled.InputWrap isFocused={isSelected}>
      <Styled.InputField
        type={isPassword ? (isPasswordVisible ? 'text' : 'password') : 'text'}
        onFocus={onFocused}
        onBlur={onBlurred}
        value={value}
        onChange={onchange}
        name={placeholder.toLowerCase()}
      />
      <Styled.InputPlaceholder>{placeholder}</Styled.InputPlaceholder>
      {isPassword && (
        <Styled.InputIcon
          src={isPasswordVisible ? IMAGES.show : IMAGES.hide}
          onClick={changePasswordVisibility}
        />
      )}
    </Styled.InputWrap>
  );
};

export default Input;
