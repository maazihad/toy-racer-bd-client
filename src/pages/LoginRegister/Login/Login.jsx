import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/login/login.json";
import Lottie from "lottie-react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
   const { signIn } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || '/';

   const handleLogin = (event) => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      const loginInfo = {
         email,
         password,
      };
      console.log(loginInfo);

      signIn(email, password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            if (loggedUser) {
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Successfully login!!!',
                  showConfirmButton: false,
                  timer: 1000
               });
            }
            navigate(from, { replace: true });
         })
         .catch(error => console.log(error.message));
   };


   return (
      <div className="hero min-h-screen bg-base-100">
         <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
               <Lottie className="w-96" animationData={login} />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm rounded-none shadow-md bg-red-100">
               <div className="card-body">
                  <form onSubmit={handleLogin}>
                     <h3 className="text-3xl font-bold text-center">Login</h3>
                     {/* ===================Email================ */}
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" />
                     </div>
                     {/* ===================Password================ */}
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary capitalize bg-red-400 hover:bg-red-800 border-0">Login</button>
                     </div>
                     <p className="text-center text-xl"><small>New user ? Please <Link to="/register" className="text-red-600 font-medium"> SignUp.</Link></small></p>
                  </form>
                  <SocialLogin />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;