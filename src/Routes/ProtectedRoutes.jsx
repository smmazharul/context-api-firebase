import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return;
    }
    
    if (user) {
        return children;
    }

    return <Navigate to={'/login'} replace={true}></Navigate>
};

export default ProtectedRoutes;