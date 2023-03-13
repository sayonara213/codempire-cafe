import { Outlet, Navigate } from 'react-router-dom';

import { getToken } from '../../../services/storage.service';
import { ROUTES } from './../../../constants/routes';

const PrivateRoutes = () => {
  const token = getToken();

  return token ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default PrivateRoutes;
