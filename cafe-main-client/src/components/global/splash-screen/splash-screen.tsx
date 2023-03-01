import React, { FC } from 'react';
import { SplashScreenContent, SplashScreenLogo, SplashScreenWrap } from './splash-screen.styled';
import { IMAGES } from '../../../constants/images';

const SplashScreen: FC = () => {
  return (
    <SplashScreenWrap>
      <SplashScreenContent>
        <SplashScreenLogo src={IMAGES.logo} />
      </SplashScreenContent>
    </SplashScreenWrap>
  );
};

export default SplashScreen;
