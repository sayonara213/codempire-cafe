import React, { useEffect } from 'react';
import * as Styled from './select.styled';
import Select, { Options } from 'react-select';
import SelectItem from './select-item/select-item';
import { IProduct } from './../../../types/types.products';
import { OptionType } from '../../../types/types.select';
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
  selectedItems?: IAllergen[];
  onchange: (item: string[]) => void;
}

const GlobalSelect: React.FC<GlobalSelectProps> = ({ items, onchange, selectedItems }) => {
  const options = items?.map((item: IProduct | IAllergen) => ({
    value: item.id,
    label: item.name,
  }));
  const [selected, setSelected] = React.useState<OptionType[]>([]);

  useEffect(() => {
    if (selectedItems) {
      setSelected(selectedItems.map((item) => ({ value: item.id, label: item.name })));
    }
  }, [selectedItems]);

  const handleChange = (item: any) => {
    if (!selected.some((i) => i.value === item.value)) {
      setSelected([...selected, item]);
    }
  };

  const handleRemove = (label: any) => {
    setSelected(selected.filter((item) => item.label !== label));
  };

  useEffect(() => {
    const values = selected.map((item) => item.value);
    onchange(values);
  }, [selected]);

  return (
    <Styled.SelectContainer>
      <Styled.SelectItemWrap>
        {selected.map((item, index) => (
          <SelectItem item={item.label} remove={handleRemove} key={index} />
        ))}
      </Styled.SelectItemWrap>
      <Select options={options} onChange={(label) => handleChange(label)} styles={customStyles} />
    </Styled.SelectContainer>
  );
};

export default GlobalSelect;
