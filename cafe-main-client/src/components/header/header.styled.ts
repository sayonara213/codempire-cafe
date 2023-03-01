import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.dark};
`;

export const HeaderAuth = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-family: ${({ theme }) => theme.font.medium};
`;
