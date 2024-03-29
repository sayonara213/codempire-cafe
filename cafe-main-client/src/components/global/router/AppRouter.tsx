import React, { useEffect, useState } from 'react';

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
import MenuInfo from './../../menu-info/menu-info';
import AdditionalAuth from '../../auth/additional/additional-auth';
import Profile from '../../user-info/profile';
import { useAppDispatch } from '../../../hooks/hooks';
import { getToken } from '../../../services/storage.service';
import { retrieveUserInfo } from '../../../services/auth.service';
import OrderList from '../../order-list/order-list';

const AppRouter: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = getToken();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      retrieveUserInfo(dispatch);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<PrivateRoutes />}>
          <Route path='/' element={<Navigate to={ROUTES.menu} replace />} />
          <Route path={ROUTES.profile} element={<Profile />} />
          <Route path='/' element={<RoleRouter />}>
            <Route path={ROUTES.createMenu} element={<MenuEdit />} />
            <Route path={ROUTES.createProduct} element={<ProductEdit />} />
          </Route>
        </Route>
        <Route path={ROUTES.menu} element={<Main />} />

        <Route path={ROUTES.menuInfo} element={<MenuInfo isProduct={false} />} />
        <Route path={ROUTES.productInfo} element={<MenuInfo isProduct={true} />} />

        <Route path={ROUTES.editMenu + ':id'} element={<MenuEdit />} />
        <Route path={ROUTES.editProduct + ':id'} element={<ProductEdit />} />

        <Route path={ROUTES.login} element={<Auth isLogin={true} />} />
        <Route path={ROUTES.register} element={<Auth isLogin={false} />} />
        <Route path={ROUTES.orders} element={<OrderList />} />
        <Route path={ROUTES.registerAdditional} element={<AdditionalAuth />} />
        <Route path={ROUTES.splashScreen} element={<SplashScreen />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
