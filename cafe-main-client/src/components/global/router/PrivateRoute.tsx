import { Outlet, Navigate } from "react-router-dom";
import { getToken } from './../../../services/auth.service';
import { ROUTES } from './../../../constants/routes';

const PrivateRoutes = () => {

    const token = getToken();
    console.log(token);

    return (
        token ? <Outlet/> : <Navigate to={ROUTES.login}/>
    )
}

export default PrivateRoutes;