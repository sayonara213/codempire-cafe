import styled from 'styled-components';

export const HeadingContainer = styled.div`
  width: 100%;
  padding: 24px 0 0 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeadingButtonWrap = styled.div``;

export const HeadingButton = styled.button`
  margin-right: 20px;
  padding: 0;

  width: 225px;
  height: 50px;
  border: none;

  background-color: ${({ theme }) => theme.color.dark};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const HeadingSelect = styled.select`
  width: 225px;
  height: 50px;

  color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};

  background-color: transparent;
  border: none;
  outline: none;
`;

export const SelectOption = styled.option`
  background-color: transparent;
  color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
