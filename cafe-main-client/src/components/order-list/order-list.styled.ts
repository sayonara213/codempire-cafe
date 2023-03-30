import styled from 'styled-components';

export const OrderListHeader = styled.div`
  margin-top: 24px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButtonWrap = styled.div`
  width: 470px;
  display: flex;
  gap: 20px;
`;

export const OrderListBody = styled.div`
  margin-top: 24px;
  width: 100%;

  padding: 0 100px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

export const OrderListEmpty = styled.div`
  margin-top: 24px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderListEmptyText = styled.h1`
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.text};
`;
