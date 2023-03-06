import React from 'react';
import * as Styled from './heading.styled';
import { useNavigate } from 'react-router-dom';
import { RoleProps } from '../../../types/types.role';
import { ROUTES } from './../../../constants/routes';

const Heading: React.FC<RoleProps> = ({ isAdmin }) => {
  const navigate = useNavigate();

  const handleAddMenu = () => {
    navigate(ROUTES.createMenu);
  };

  return (
    <Styled.HeadingContainer>
      <Styled.HeadingButtonWrap>
        <Styled.HeadingButton>MENU</Styled.HeadingButton>
        <Styled.HeadingButton>PRODUCTS</Styled.HeadingButton>
        {isAdmin && <Styled.HeadingButton onClick={handleAddMenu}>ADD</Styled.HeadingButton>}
      </Styled.HeadingButtonWrap>
      <Styled.HeadingSelect>
        <Styled.SelectOption hidden>SORTING BY</Styled.SelectOption>
        <Styled.SelectOption>Price Asc</Styled.SelectOption>
        <Styled.SelectOption>Price Desc</Styled.SelectOption>
      </Styled.HeadingSelect>
    </Styled.HeadingContainer>
  );
};

export default Heading;
