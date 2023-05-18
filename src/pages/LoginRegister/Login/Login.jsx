import { Link } from "react-router-dom";
import login from "../../../assets/login/login.json";
import Lottie from "lottie-react";
const Login = () => {

   const handleLogin = (event) => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      const loginInfo = {
         email,
         password,
      };
      // console.log(loginInfo);
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
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;