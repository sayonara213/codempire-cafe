import React from 'react';
import * as Styled from './heading.styled';
import { useNavigate } from 'react-router-dom';
import { RoleProps } from '../../../types/types.role';
import { ROUTES } from './../../../constants/routes';
import { useAppDispatch } from '../../../hooks/hooks';
import { setIsProduct, setOrderBy } from '../../../redux/menuList.slice';

const options = [
  { value: { name: 'price', order: 'asc' }, label: 'Price Asc' },
  { value: { name: 'price', order: 'desc' }, label: 'Price Desc' },
  { value: { name: 'name', order: 'asc' }, label: 'Name Asc' },
  { value: { name: 'name', order: 'desc' }, label: 'Name Desc' },
  { value: { name: 'weight', order: 'asc' }, label: 'Weight Asc' },
  { value: { name: 'weight', order: 'desc' }, label: 'Weight Desc' },
  { value: { name: 'createdAt', order: 'asc' }, label: 'Date Asc' },
  { value: { name: 'createdAt', order: 'desc' }, label: 'Date Desc' },
];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
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

const Heading: React.FC<RoleProps> = ({ isAdmin }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onOrderSelect = (selectedOption: any) => {
    dispatch(setOrderBy(selectedOption.value));
  };

  const handleAddMenu = () => {
    navigate(ROUTES.createMenu);
  };

  const handleAddProduct = () => {
    navigate(ROUTES.createProduct);
  };

  const handleClickProduct = () => {
    dispatch(setIsProduct(true));
  };

  const handleClickMenu = () => {
    dispatch(setIsProduct(false));
  };

  return (
    <Styled.HeadingContainer>
      <Styled.HeadingButtonWrap>
        <Styled.HeadingButton onClick={handleClickMenu}>MENU</Styled.HeadingButton>
        <Styled.HeadingButton onClick={handleClickProduct}>PRODUCTS</Styled.HeadingButton>
        {isAdmin && (
          <>
            <Styled.HeadingButton onClick={handleAddMenu}>ADD MENU</Styled.HeadingButton>
            <Styled.HeadingButton onClick={handleAddProduct}>ADD PRODUCT</Styled.HeadingButton>
          </>
        )}
      </Styled.HeadingButtonWrap>
      <Styled.HeadingSelect
        options={options}
        styles={customStyles}
        defaultValue={options[0]}
        onChange={onOrderSelect}
      />
    </Styled.HeadingContainer>
  );
};

export default Heading;
