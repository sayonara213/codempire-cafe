import React from 'react';
import * as Styled from './heading.styled';
import { useNavigate } from 'react-router-dom';
import { RoleProps } from '../../../types/types.role';
import { ROUTES } from './../../../constants/routes';
import { useAppDispatch } from '../../../hooks/hooks';
import { setIsProduct, setOrderBy } from '../../../redux/menuList.slice';
import GlobalSorting from '../../global/Sorting/sorting';
import Button from './../../global/Button/button';

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
        <Button onClick={handleClickMenu} isActive type={'button'}>
          MENU
        </Button>
        <Button onClick={handleClickProduct} isActive type={'button'}>
          PRODUCTS
        </Button>
        {isAdmin && (
          <>
            <Button onClick={handleAddMenu} isActive type={'button'}>
              ADD MENU
            </Button>
            <Button onClick={handleAddProduct} isActive type={'button'}>
              ADD PRODUCT
            </Button>
          </>
        )}
      </Styled.HeadingButtonWrap>
      <GlobalSorting options={options} defaultValue={options[0]} onChange={onOrderSelect} />
    </Styled.HeadingContainer>
  );
};

export default Heading;
