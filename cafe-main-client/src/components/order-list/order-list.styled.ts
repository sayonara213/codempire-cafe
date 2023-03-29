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

export const OrderSectionWrap = styled.div`
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14);
`;

export const OrderSectionHeader = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const OrderSectionHeaderTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.dark};
`;

export const OrderSectionBody = styled.div`
  margin: 0;
  padding: 0;
`;

export const ItemParamWrap = styled.div`
  margin-right: 32px;

  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemId = styled.p`
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.color.dark};
`;

export const ItemTime = styled.p`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.notActive};
`;

export const ItemItemsList = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.dark};
`;
