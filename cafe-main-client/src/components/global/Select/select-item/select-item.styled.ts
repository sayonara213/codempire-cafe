import styled from 'styled-components';

export const SelectItemWrap = styled.div`
  margin: 0 9px 9px 0;
  padding: 9px 12px;

  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.color.selectItem};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export const SelectItemText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const SelectItemIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 9px;
`;
