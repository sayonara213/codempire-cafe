import styled from 'styled-components';

export const MenuListItemContainer = styled.div`
  width: 225px;
  height: 391px;

  margin: 0 20px 20px 0;
  padding: 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const MenuImageWrap = styled.div`
  width: 100%;
  height: 206px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuListItemImage = styled.img`
  width: 100%;
  margin-bottom: 16px;

  object-fit: cover;
`;

export const MenuListItemTitle = styled.h3`
  width: 100%;
  margin-bottom: 15px;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const MenuListItemDescription = styled.p`
  width: 100%;

  color: ${({ theme }) => theme.color.borderDark};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const MenuParamWrap = styled.div`
  width: 100%;
  margin: auto 0 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-shadow: 0px -5px 10px 8px #ffffff;
`;

export const MenuListItemParam = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.large};

  text-align: center;
`;

export const MenuListItemButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;

  background-color: ${({ theme }) => theme.color.dark};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const MenuListDeleteButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;

  background-color: transparent;
  color: ${({ theme }) => theme.color.red};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
