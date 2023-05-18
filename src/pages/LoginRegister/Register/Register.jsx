import { Link } from "react-router-dom";
import register from "../../../assets/register/register.json";
import Lottie from "lottie-react";


const Register = () => {

   const handleRegister = (event) => {
      event.preventDefault();

      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      const regInfo = {
         email,
         password,
      };
      // console.log(loginInfo);
   };

   return (
      <div className="hero min-h-screen bg-base-100">
         <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
               <Lottie className="w-[500px]" animationData={register} />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm rounded-none shadow-md bg-red-100">
               <div className="card-body">
                  <form onSubmit={handleRegister}>
                     <h3 className="text-3xl font-bold text-center">Sign Up</h3>
                     {/* ===================Name================ */}
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="email" name="name" className="input input-bordered" />
                     </div>
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
                     </div>
                     {/* ===================photo url================ */}
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="url" placeholder="Photo url" name="url" className="input input-bordered" />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary capitalize bg-red-400 hover:bg-red-800 border-0">Sign Up</button>
                        <p className="text-center text-xl"><small>Already have an account ? Please <Link to="/login" className="text-red-600 font-medium"> Login.</Link></small></p>
                     </div>

                  </form>



               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;