import styled from 'styled-components';

export const ModalWrap = styled.div`
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  margin-bottom: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.color.text};
`;

export const ModalClose = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const ModalBody = styled.div``;
