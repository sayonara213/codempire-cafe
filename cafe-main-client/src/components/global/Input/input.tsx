import React, { useEffect } from 'react';

import * as Styled from './input.styled';
import { IMAGES } from '../../../constants/images';

interface InputProps {
  placeholder: string;
  value: any;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  isPassword?: boolean;
  isLight?: boolean;
  isPlaceholder?: boolean;
  icon?: string;
  type?: string;
  name?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onchange,
  isPassword,
  isLight,
  icon,
  isPlaceholder,
  type,
  name,
  onKeyDown,
}) => {
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
    <Styled.InputWrap isFocused={isSelected} isLight={isLight}>
      <Styled.InputField
        type={isPassword ? (isPasswordVisible ? 'text' : 'password') : type}
        onFocus={onFocused}
        onBlur={onBlurred}
        value={value}
        onChange={onchange}
        name={name && name?.length > 0 ? name : placeholder.toLowerCase()}
        isLight={isLight}
        placeholder={isPlaceholder ? '' : placeholder}
        onKeyDown={onKeyDown}
      />
      {isPlaceholder && (
        <Styled.InputPlaceholder isLight={isLight}>{placeholder}</Styled.InputPlaceholder>
      )}
      {isPassword && (
        <Styled.InputIcon
          src={isPasswordVisible ? IMAGES.show : IMAGES.hide}
          onClick={changePasswordVisibility}
        />
      )}
      {icon && <Styled.InputIcon src={icon} />}
    </Styled.InputWrap>
  );
};

export default Input;
