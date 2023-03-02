import { Navigate, Outlet } from "react-router-dom";
import { getRole, getToken } from "../../../services/auth.service";

const RoleRouter = () => {
    const token = getToken();
    const role = getRole();

    return (
        token && role ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default RoleRouter;