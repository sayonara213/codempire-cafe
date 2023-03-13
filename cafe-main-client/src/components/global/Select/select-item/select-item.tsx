import React from 'react';
import * as Styled from './select-item.styled';
import { IMAGES } from './../../../../constants/images';

interface ISelectItem {
  item: string;
  remove: (value: any) => void;
}

const SelectItem: React.FC<ISelectItem> = ({ item, remove }) => {
  return (
    <Styled.SelectItemWrap>
      <Styled.SelectItemText>{item}</Styled.SelectItemText>
      <Styled.SelectItemIcon src={IMAGES.remove} onClick={() => remove(item)} />
    </Styled.SelectItemWrap>
  );
};

export default SelectItem;
