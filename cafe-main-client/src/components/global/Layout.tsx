import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { ROUTES } from './../../constants/routes';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== ROUTES.login &&
        location.pathname !== ROUTES.register &&
        location.pathname !== ROUTES.registerAdditional && <Footer />}
    </>
  );
};

export default Layout;
