import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/footer';

import Header from '../header/header';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
    </>
  );
};

export default Layout;
