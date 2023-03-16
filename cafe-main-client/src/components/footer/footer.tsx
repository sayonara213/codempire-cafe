import React from 'react';

import { useNavigate } from 'react-router-dom';

import * as Styled from './footer.styled';

import { IMAGES } from './../../constants/images';
import { ROUTES } from '../../constants/routes';

const sections = [
  { title: 'Home', url: ROUTES.menu },
  { title: 'Profile', url: ROUTES.profile },
  { title: 'Orders', url: ROUTES.orders },
];

const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      {sections.map((section) => (
        <Styled.FooterContent key={section.title} to={section.url}>
          <Styled.FooterIcon src={IMAGES.footerProfile} />
          <Styled.FooterText>{section.title}</Styled.FooterText>
        </Styled.FooterContent>
      ))}
    </Styled.FooterContainer>
  );
};

export default Footer;
