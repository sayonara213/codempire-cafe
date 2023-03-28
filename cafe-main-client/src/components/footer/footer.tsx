import React from 'react';

import * as Styled from './footer.styled';

import { IMAGES } from './../../constants/images';
import { ROUTES } from '../../constants/routes';

const sections = [
  { title: 'Home', url: ROUTES.menu, icon: IMAGES.footerHome },
  { title: 'Profile', url: ROUTES.profile, icon: IMAGES.footerProfile },
  { title: 'Orders', url: ROUTES.orders, icon: IMAGES.orders },
];

const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      {sections.map((section) => (
        <Styled.FooterContent key={section.title} to={section.url}>
          <Styled.FooterIcon src={section.icon} />
          <Styled.FooterText>{section.title}</Styled.FooterText>
        </Styled.FooterContent>
      ))}
    </Styled.FooterContainer>
  );
};

export default Footer;
