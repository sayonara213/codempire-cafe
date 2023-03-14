import React from 'react';
import * as Styled from './checkbox.styled';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onchange, value }) => {
  return (
    <Styled.CheckBoxContainer>
      <Styled.CheckBoxLabel>
        <Styled.CheckBoxInput type='checkbox' checked={checked} onChange={onchange} value={value} />
        {label}
      </Styled.CheckBoxLabel>
    </Styled.CheckBoxContainer>
  );
};

export default CheckBox;
