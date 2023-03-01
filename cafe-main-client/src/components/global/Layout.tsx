import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../header/header';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header location={location.pathname} />
      <Outlet />
    </>
  );
};

export default Layout;
