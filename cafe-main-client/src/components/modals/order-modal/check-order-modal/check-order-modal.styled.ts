import styled from 'styled-components';

export const CheckOrderWrap = styled.div`
  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
  }
`;

export const CheckOrderSection = styled.div`
  margin: 10px 0;
`;

export const CheckOrderTitle = styled.h1`
  margin-bottom: 24px;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.text};
`;

export const CheckOrderData = styled.div`
  margin-bottom: 24px;
`;

export const CheckOrderSubTitle = styled.h2`
  margin-bottom: 6px;
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

export const CheckOrderText = styled.p`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.text};
`;

export const CheckOrderButtonsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
