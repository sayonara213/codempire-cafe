import React from 'react';
import * as Styled from './checkbox.styled';

interface CheckBoxProps {
  label: string;
  checked: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked }) => {
  return (
    <Styled.CheckBoxContainer>
      <Styled.CheckBoxLabel>
        <Styled.CheckBoxInput type='checkbox' />
        {label}
      </Styled.CheckBoxLabel>
    </Styled.CheckBoxContainer>
  );
};

export default CheckBox;
