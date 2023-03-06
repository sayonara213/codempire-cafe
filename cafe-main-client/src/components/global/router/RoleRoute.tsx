import { Navigate, Outlet } from 'react-router-dom';

import { getToken } from '../../../services/storage.service';
import { ROUTES } from './../../../constants/routes';
import { useAppSelector } from '../../../hooks/hooks';

const RoleRouter = () => {
  const token = getToken();
  const user = useAppSelector((store) => store.user);

  return token && user.role === 'admin' ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default RoleRouter;
