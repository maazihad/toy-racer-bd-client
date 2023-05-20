import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {

   const { user } = useContext(AuthContext);
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = data => {
      console.log(data);
   };

   return (
      <section className="bg-red-100 min-h-[calc(100vh-50px)]">
         <h2 className="text-4xl text-center font-black text-red-700 py-10">Add a toys here</h2>
         <div className="max-w-7xl mx-auto pb-10">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="grid lg:grid-cols-2 gap-5">
                  {/* ======================Photo URL============= */}
                  <div className="form-control">
                     <label className="label font-bold">
                        <span className="label-text text-lg">Photo URL</span>
                     </label>
                     <input
                        className="text-input input input-bordered" {...register("url")} placeholder="url" type="url"
                     />
                  </div>

                  {/* ========================Name================ */}
                  <div className="form-control">
                     <label className="label font-bold">
                        <span className="label-text text-lg">Name</span>
                     </label>
                     <input
                        className="text-input input input-bordered" {...register("name")} placeholder="Name" type="text"
                     />
                  </div>

                  {/* ========================Seller Name================ */}
                  <div className="form-control">
                     <label className="label font-bold">
                        <span className="label-text text-lg">Seller Name</span>
                     </label>
                     <input
                        className="text-input input input-bordered" value={user?.name} {...register("seller")} placeholder="seller" type="text"
                     />
                  </div>

                  {/* ========================Email================ */}

                  <div className="form-control">
                     <label className="label font-bold">
                        <span className="label-text text-lg">Email</span>
                     </label>
                     <input
                        className="text-input input input-bordered" defaultValue={user?.email}
                        {...register("email")} placeholder="email" type="email"
                     />
                  </div>

                  {/* ========================Category================ */}
                  <div className="form-control">
                     <label className="label font-bold">
                        <span className="label-text text-lg">Category</span>
                     </label>
                     <select className="text-input input input-bordered" {...register("category")}>
                        <option value="Vintage Toy">Vintage Toy</option>
                        <option value="Sports Toy">Sports Toy</option>
                        <option value="Mud Muller Toy">Mud Muller Toy</option>
                        <option value="Remote Toy">Remote Toy</option>
                     </select>
                  </div>

                  {/* ========================Price================ */}
                  <div className="form-control">
                     <label className="label font-bold">
                        <span className="label-text text-lg">Price</span>
                     </label>
                     <input
                        className="text-input input input-bordered" {...register("price")} placeholder="price" type="text"
                     />
                  </div>

                  {/* ========================Rating================ */}
                  <div className="form-control">
                     <label className="label font-bold">
                        <span className="label-text text-lg">Rating</span>
                     </label>
                     <input
                        className="text-input input input-bordered" {...register("rating")} placeholder="rating out of 5" type="number" min="0" max="5"
                     />
                  </div>


                  {/* ========================Quantity================ */}
                  <div className="form-control">
                     <label className="label font-bold">
                        <span className="label-text text-lg">Quantity</span>
                     </label>
                     <input
                        className="text-input input input-bordered" {...register("quantity")} placeholder="quantity" type="text"
                     />
                  </div>
               </div>

               {/* ========================Details================ */}
               <div className="form-control mt-6">
                  <label className="label font-bold">
                     <span className="label-text text-lg">Product Details</span>
                  </label>
                  <input
                     className="text-input input input-bordered" {...register("details")} placeholder="details in product" type="text"
                  />
               </div>

               <div className="form-control mt-6">
                  <input className="submit-btn btn btn-primary bg-red-700 hover:bg-red-900 border-0 capitalize text-lg" value="Add A Toy" type="submit" />
               </div>
            </form>
         </div>
      </section>
   );
};

export default AddToy;