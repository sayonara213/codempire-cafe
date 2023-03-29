import styled from 'styled-components';

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
