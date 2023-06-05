import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../pages/Shared/Spinner/Spinner";
import Swal from "sweetalert2";
const SecureRoute = ({ children }) => {

   const { user, loading } = useContext(AuthContext);
   const location = useLocation();
   // console.log(location);

   if (loading) {
      return <Spinner />;
   }
   if (!user) {
      Swal.fire({
         icon: 'warning',
         title: 'Oops...',
         text: 'You have to log in first to view details',
      });
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
   }
   return children;
};

export default SecureRoute;