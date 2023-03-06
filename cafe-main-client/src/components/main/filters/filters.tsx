import React from 'react';
import { IMAGES } from '../../../constants/images';
import * as Styled from './filters.styled';
import CheckBox from './../../global/CheckBox/checkbox';

const filters = [
  { name: 'Drinks', categories: ['Coffee', 'Tea', 'Juice', 'Water'] },
  { name: 'Food', categories: ['Sandwiches', 'Burgers', 'Pizza', 'Salads'] },
];

const Filters: React.FC = () => {
  return (
    <Styled.FiltersContainer>
      <Styled.FiltersHeader>
        <Styled.FiltersHeaderIcon src={IMAGES.filter} />
        <Styled.FiltersHeaderTitle>Filters</Styled.FiltersHeaderTitle>
      </Styled.FiltersHeader>
      {filters.map((filter) => (
        <Styled.FiltersCategory>
          <Styled.FiltersCategoryTitle>{filter.name}</Styled.FiltersCategoryTitle>
          {filter.categories.map((category) => (
            <CheckBox label={category} checked={true} />
          ))}
        </Styled.FiltersCategory>
      ))}
    </Styled.FiltersContainer>
  );
};

export default Filters;
