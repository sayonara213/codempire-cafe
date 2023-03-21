import styled from 'styled-components';

export const DeleteModalWrap = styled.div`
  box-sizing: border-box;
`;

export const DeleteModalText = styled.p`
  margin: 30px 0;

  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.text};
  text-align: center;
`;

export const DeleteModalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 20px;
`;
