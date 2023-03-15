import styled from 'styled-components';

export const MenuInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButtonWrap = styled.div`
  width: 100%;
`;

export const ItemWrap = styled.div`
  padding-bottom: 60px;
  width: 100%;
  height: 308px;

  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const ItemSectionWrap = styled.div`
  width: 33%;
  height: 308px;
  padding: 0 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemImageWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 308px;

  object-fit: cover;
`;

export const ItemTitle = styled.h3`
  margin: 0 0 50px 0;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
`;

export const ItemDescription = styled.p`
  margin: 0 0 20px 0;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const ItemParamWrap = styled.div``;

export const ItemParamTitle = styled.p`
  margin: 0 0 10px 0;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const ItemParamValue = styled.p`
  margin: 0 0 20px 0;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const ItemPriceWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

export const ItemPrice = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const ItemButtonsWrap = styled.div`
  padding: 0 30px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OtherSectionWrap = styled.div`
  width: 100%;
  margin: 20px 0 100px 0;
`;

export const OtherSectionItemsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
