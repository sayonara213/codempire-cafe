import styled from 'styled-components';

export const MenuListItemContainer = styled.div`
  width: 226px;
  height: 391px;

  margin: 0 10px 20px 10px;
  padding: 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14);
`;

export const MenuListItemImage = styled.img`
  width: 100%;
  margin-bottom: 16px;

  object-fit: cover;
`;

export const MenuListItemTitle = styled.h3`
  width: 100%;
  margin-bottom: 5px;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const MenuListItemDescription = styled.p`
  color: ${({ theme }) => theme.color.borderDark};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const MenuListItemPrice = styled.p`
  margin: 8px 0;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.large};

  width: 100%;
  text-align: center;
`;

export const MenuListItemButton = styled.button`
  margin-top: auto;

  width: 100%;
  height: 40px;
  border: none;

  background-color: ${({ theme }) => theme.color.dark};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
