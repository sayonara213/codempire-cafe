import React from 'react';
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
    <Styled.FooterWrap>
      <Styled.FooterContainer>
        {sections.map((section) => (
          <Styled.FooterContent>
            <Styled.FooterIcon src={IMAGES.footerProfile} />
            <Styled.FooterText>{section.title}</Styled.FooterText>
          </Styled.FooterContent>
        ))}
      </Styled.FooterContainer>
    </Styled.FooterWrap>
  );
};

export default Footer;
