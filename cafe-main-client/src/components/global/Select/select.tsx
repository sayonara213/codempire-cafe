import React from 'react';
import * as Styled from './select.styled';
import Select from 'react-select';
import SelectItem from './select-item/select-item';
import { IProduct } from './../../../types/types.products';
import { IAllergen } from './../../../types/types.allergens';

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: '1px solid #e0e0e0',
    boxShadow: 'none',
    height: '54px',
    fontFamily: 'regular',
    padding: '0 5px',
    ':hover': {
      borderColor: 'black',
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontFamily: 'regular',
    backgroundColor: state.isFocused ? 'black' : 'white',
    color: state.isFocused ? 'white' : 'black',
    ':hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'black',
  }),
};

interface GlobalSelectProps {
  items: IProduct[] | IAllergen[];
  selectedItems: IProduct[] | IAllergen[];
  onchange: (item: any[]) => void;
}

const GlobalSelect: React.FC<GlobalSelectProps> = ({ items, onchange, selectedItems }) => {
  const options = items?.map((item: IProduct | IAllergen) => ({
    value: item,
    label: item.name,
  }));

  const handleChange = (item: any) => {
    if (!selectedItems?.some((i) => i.name === item)) {
      onchange([...selectedItems, item.value]);
    }
  };

  const handleRemove = (label: any) => {
    onchange(selectedItems.filter((item) => item.name !== label));
  };

  return (
    <Styled.SelectContainer>
      <Styled.SelectItemWrap>
        {selectedItems?.map((item, index) => (
          <SelectItem item={item.name} remove={handleRemove} key={index} />
        ))}
      </Styled.SelectItemWrap>
      <Select options={options} onChange={(label) => handleChange(label)} styles={customStyles} />
    </Styled.SelectContainer>
  );
};

export default GlobalSelect;
