import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
   const { createUser } = useContext(AuthContext);
   const [showPassword, setShowPassword] = useState(false);

   const handleRegister = (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const url = form.url.value;

      const regInfo = {
         name,
         email,
         password,
         url,
      };
      console.log(regInfo);

      createUser(email, password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            if (loggedUser) {
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'User create successfully.',
                  showConfirmButton: false,
                  timer: 1000
               });
            }
         })
         .catch(error => console.log(error.message));
   };

   return (
      <div className="hero  bg-base-100 ">
         <div className=" grid grid-cols-6 bg-purple-200">
            <div className="text-center lg:text-left col-start-1 col-span-2 " >
               <img className="object-cover lg:min-h-[600px]" src={`https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg`} alt="" />
            </div>
            <div className="card w-full rounded-none shadow-md bg-red-100 col-start-3 col-span-6">
               <div className="card-body">
                  <form onSubmit={handleRegister}>
                     <h3 className="text-3xl font-bold mb-2">Create an account</h3>
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
                     <div className="form-control relative">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className=" input input-bordered" />

                        <span className='absolute right-5 top-12' onClick={() => setShowPassword(!showPassword)}>
                           <small>
                              {
                                 showPassword
                                    ? <FaEye className='cursor-pointer text-2xl text-red-500' />
                                    : <FaEyeSlash className='cursor-pointer text-2xl text-red-700 ' />
                              }
                           </small>
                        </span>
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
                     </div>
                  </form>
                  <div>
                     <p className="text-center text-xl"><small>Already have an account ? Please <Link to="/login" className="text-red-600 font-medium"> Login.</Link></small></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;