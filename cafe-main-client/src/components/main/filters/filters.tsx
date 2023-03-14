import React, { useEffect } from 'react';
import { IMAGES } from '../../../constants/images';
import * as Styled from './filters.styled';
import CheckBox from './../../global/CheckBox/checkbox';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setTypes } from '../../../redux/menuList.slice';

const filters = [
  { name: 'Drinks', categories: ['Coffee', 'Tea', 'Juice', 'Water'] },
  { name: 'Food', categories: ['Sandwich', 'Burger', 'Pizza', 'Salad'] },
];

const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedTypes = useAppSelector((store) => store.menuList.types);

  useEffect(() => {
    selectAll();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      dispatch(setTypes([...selectedTypes, value]));
    } else {
      dispatch(setTypes(selectedTypes.filter((type) => type !== value)));
    }
  };

  const selectAll = () => {
    dispatch(setTypes(filters.flatMap((filter) => filter.categories)));
  };

  const unselectAll = () => {
    dispatch(setTypes([]));
  };

  return (
    <Styled.FiltersContainer>
      <Styled.FiltersHeader>
        <Styled.FiltersHeaderIcon src={IMAGES.filter} />
        <Styled.FiltersHeaderTitle>Filters</Styled.FiltersHeaderTitle>
      </Styled.FiltersHeader>
      {filters.map((filter) => (
        <Styled.FiltersCategory key={filter.name}>
          <Styled.FiltersCategoryTitle>{filter.name}</Styled.FiltersCategoryTitle>
          {filter.categories.map((category, index) => (
            <CheckBox
              label={category}
              checked={selectedTypes.includes(category)}
              key={index}
              onchange={handleChange}
              value={category}
            />
          ))}
        </Styled.FiltersCategory>
      ))}
      <Styled.FiltersCategoryTitle onClick={selectAll}>Select All</Styled.FiltersCategoryTitle>
      <Styled.FiltersCategoryTitle onClick={unselectAll}>Unselect All</Styled.FiltersCategoryTitle>
    </Styled.FiltersContainer>
  );
};

export default Filters;
