import React from 'react';
import * as Styled from './footer.styled';
import { IMAGES } from './../../constants/images';
import { ROUTES } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

const sections = [
  { title: 'Home', url: ROUTES.menu },
  { title: 'Profile', url: ROUTES.profile },
  { title: 'Orders', url: ROUTES.orders },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <Styled.FooterContainer>
      {sections.map((section) => (
        <Styled.FooterContent key={section.title} onClick={() => handleNavigate(section.url)}>
          <Styled.FooterIcon src={IMAGES.footerProfile} />
          <Styled.FooterText>{section.title}</Styled.FooterText>
        </Styled.FooterContent>
      ))}
    </Styled.FooterContainer>
  );
};

export default Footer;
