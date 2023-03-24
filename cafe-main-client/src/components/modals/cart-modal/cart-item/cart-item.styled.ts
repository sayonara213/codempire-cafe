import styled from 'styled-components';

export const CartItemContainer = styled.div`
  margin-bottom: 24px;

  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartItemSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 280px;
`;

export const CartItemImage = styled.img`
  width: 70px;
  height: 70px;

  border-radius: 10px;
  object-fit: contain;
`;

export const CartItemDelete = styled.p`
  margin-top: 10px;

  text-align: center;
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: 1.25px;
  color: ${({ theme }) => theme.color.purple};

  cursor: pointer;
`;

export const CartItemName = styled.p`
  margin-left: 24px;

  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};
`;

export const CartItemDescription = styled.p`
  margin: 10px 0 0 24px;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CartItemQuantityWrap = styled.div`
  margin: 0 auto 24px auto;

  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CartItemQuantity = styled.p`
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.color.text};
`;

export const CartItemQuantityButton = styled.p`
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.text};

  cursor: pointer;
`;

export const CartItemPrice = styled.p`
  margin: 0 10px;

  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.text};
`;
