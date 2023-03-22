import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.color.dark};
`;

export const HeaderAuth = styled.h2`
  margin: auto;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-family: ${({ theme }) => theme.font.medium};
`;

export const HeaderLogo = styled.img`
  margin-right: 80px;
  width: 110px;
  object-fit: contain;

  filter: brightness(0) invert(1);
`;

export const HeaderIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderFormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 326px;
`;
