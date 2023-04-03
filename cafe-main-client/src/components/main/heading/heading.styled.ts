import styled from 'styled-components';
import Select from 'react-select';

export const HeadingContainer = styled.div`
  width: 100%;
  padding: 24px 0 0 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeadingButtonWrap = styled.div`
  width: 60%;

  display: flex;
  gap: 20px;

  @media (max-width: 960px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const SelectWrap = styled.div`
  width: auto;
`;

export const HeadingSelect = styled(Select)`
  width: 225px;
  height: 50px;

  font-family: ${({ theme }) => theme.font.medium};

  display: flex;
  align-items: center;
`;

export const SelectOption = styled.option`
  background-color: transparent;
  color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
