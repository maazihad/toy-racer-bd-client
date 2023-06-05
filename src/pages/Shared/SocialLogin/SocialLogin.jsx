import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const SocialLogin = () => {
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   const navigate = useNavigate();

   const { googleSignIn } = useContext(AuthContext);

   const handleGoogleSignIn = () => {
      googleSignIn()
         .then(result => {
            const loggedUser = result.user;
            if (loggedUser) {
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Successfully login with google !!!',
                  showConfirmButton: false,
                  timer: 1500
               });
            }
            navigate(from, { replace: true });
         })
         .catch(error => toast(error.message));
   };

   return (
      <div>
         <div className="divider font-bold text-red-900">OR</div>
         <div className="text-center space-x-6">
            <button onClick={handleGoogleSignIn} className="">
               <FaGoogle className="text-red-900 text-2xl" />
            </button>
         </div>
      </div>
   );
};

export default SocialLogin;