import styled from 'styled-components';

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

  width: 100%;
  height: 55px;

  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;
