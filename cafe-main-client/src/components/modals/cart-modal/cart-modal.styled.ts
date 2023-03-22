import styled from 'styled-components';

export const CartModalContainer = styled.div``;

export const CartModalBody = styled.div`
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CartModalFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterPriceWrap = styled.div`
  margin: 24px 0;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const FooterPriceTitle = styled.p`
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.color.text};
`;

export const FooterPriceValue = styled.p`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.color.text};
`;

export const FooterButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const CartText = styled.p`
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};
`;
