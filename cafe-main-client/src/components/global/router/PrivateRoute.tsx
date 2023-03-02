import { Outlet, Navigate } from "react-router-dom";
import { getToken } from './../../../services/auth.service';

const PrivateRoutes = () => {

    const token = getToken();
    console.log(token);

    return (
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;