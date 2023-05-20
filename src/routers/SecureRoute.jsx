import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../pages/Shared/Spinner/Spinner";

const SecureRoute = ({ children }) => {

   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
   // console.log(location);

   if (loading) {
      return <Spinner />;
   }
   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
   }
   return children;
};

export default SecureRoute;