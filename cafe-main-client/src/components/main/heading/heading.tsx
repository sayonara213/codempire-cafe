import React from 'react';
import * as Styled from './heading.styled';

const Heading: React.FC = () => {
  return (
    <Styled.HeadingContainer>
      <Styled.HeadingButtonWrap>
        <Styled.HeadingButton>MENU</Styled.HeadingButton>
        <Styled.HeadingButton>PRODUCTS</Styled.HeadingButton>
      </Styled.HeadingButtonWrap>
      <Styled.HeadingSelect>
        <Styled.SelectOption>SORTING BY</Styled.SelectOption>
        <Styled.SelectOption>123</Styled.SelectOption>
        <Styled.SelectOption>123</Styled.SelectOption>
      </Styled.HeadingSelect>
    </Styled.HeadingContainer>
  );
};

export default Heading;
