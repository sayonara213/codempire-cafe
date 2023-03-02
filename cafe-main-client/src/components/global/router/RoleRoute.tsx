import { Navigate, Outlet } from "react-router-dom";
import { getRole, getToken } from "../../../services/auth.service";
import { ROUTES } from './../../../constants/routes';

const RoleRouter = () => {
    const token = getToken();
    const role = getRole();

    return (
        token && role === "admin" ? <Outlet/> : <Navigate to={ROUTES.login}/>
    )
}

export default RoleRouter;