import { Navigate, Outlet } from "react-router-dom";

import { getToken, getRole } from "../../../services/storage.service";
import { ROUTES } from './../../../constants/routes';

const RoleRouter = () => {
    const token = getToken();
    const role = getRole();

    return (
        token && role === "admin" ? <Outlet/> : <Navigate to={ROUTES.login}/>
    )
}

export default RoleRouter;