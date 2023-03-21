import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { API_URL } from '../../../constants/url';
import { useAppDispatch } from '../../../hooks/hooks';
import { setUser } from '../../../redux/user.slice';

import { getToken } from '../../../services/storage.service';
import { ROUTES } from './../../../constants/routes';
import { apiGet } from './../../../services/api.service';

const PrivateRoutes = () => {
  const token = getToken();

  return token ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default PrivateRoutes;
