import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Layout from '../Layout';
import Auth from '../../auth/auth';
import SplashScreen from '../splash-screen/splash-screen';
import Main from '../../main/main';
import MenuEdit from './../../menu-edit/menu-edit';

import PrivateRoutes from './PrivateRoute';
import RoleRouter from './RoleRoute';

import { ROUTES } from '../../../constants/routes';
import ProductEdit from '../../menu-edit/product-edit/product-edit';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<PrivateRoutes />}>
          <Route path='/' element={<Navigate to={ROUTES.menu} replace />} />
          <Route path='/' element={<RoleRouter />}>
            <Route path={ROUTES.createMenu} element={<MenuEdit />} />
            <Route path={ROUTES.createProduct} element={<ProductEdit />} />
          </Route>
        </Route>
        <Route path={ROUTES.menu} element={<Main />} />
        <Route path={ROUTES.login} element={<Auth isLogin={true} />} />
        <Route path={ROUTES.register} element={<Auth isLogin={false} />} />
        <Route path={ROUTES.splashScreen} element={<SplashScreen />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
