import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from './global/Layout';
import Auth from './auth/auth';
import SplashScreen from './global/splash-screen/splash-screen';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/login' element={<Auth isLogin={true} />} />
        <Route path='/sign-up' element={<Auth isLogin={false} />} />
      </Route>
      <Route path={'/splash'} element={<SplashScreen />} />
    </Routes>
  );
};

export default AppRouter;
