import styled from 'styled-components';
import { IMAGES } from './../../../constants/images';

export const AddressModalWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddressModalInputWrap = styled.div`
  width: 100%;
  margin: 25px 0;
`;

export const AddressListWrap = styled.div`
  width: 100%;
  height: 335px;

  box-shadow: 1px 1px 16px 0px rgba(0, 0, 0, 0.05) inset;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AddressItemWrap = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 55px;

  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const AddressRemoveButton = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;
