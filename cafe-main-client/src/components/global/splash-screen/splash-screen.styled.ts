import styled from 'styled-components';

export const SplashScreenWrap = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.dark};
`;

export const SplashScreenContent = styled.div``;

export const SplashScreenLogo = styled.img`
  margin: 0;
  width: 400px;
  object-fit: contain;

  filter: brightness(0) invert(1);
`;
