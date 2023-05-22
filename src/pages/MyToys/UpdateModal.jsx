// import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const UpdateModal = ({ toy, handleMyToyUpdate }) => {

   // const { user } = useContext(AuthContext);
   const { _id, price, quantity, details } = toy;
   const { register, handleSubmit, formState: { errors } } = useForm();

   return (
      <>
         <input type="checkbox" id="my-modal-5" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl relative bg-red-100">
               <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h2 className="text-xl text-center font-black text-red-700 py-10">Update Toy</h2>
               <div className="max-w-7xl mx-auto pb-10">
                  <form onSubmit={handleSubmit(handleMyToyUpdate)}>
                     {errors.exampleRequired && <span>This field is required</span>}
                     <div className="grid lg:grid-cols-2 gap-5">

                        <input
                           className="text-input input input-bordered hidden" {...register("_id")} placeholder="_id" type="text"
                           defaultValue={_id}
                        />
                        {/* ========================Price================ */}
                        <div className="form-control">
                           <label className="label font-bold">
                              <span className="label-text text-lg">Price</span>
                           </label>
                           <input
                              className="text-input input input-bordered" {...register("price")} placeholder="price" type="text"
                              defaultValue={price}
                           />
                        </div>


                        {/* ========================Quantity================ */}
                        <div className="form-control">
                           <label className="label font-bold">
                              <span className="label-text text-lg">Quantity</span>
                           </label>
                           <input
                              className="text-input input input-bordered" {...register("quantity")} placeholder="quantity" type="text"
                              defaultValue={quantity}
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
                           defaultValue={details}
                        />
                     </div>

                     <div className="modal-action">
                        <input htmlFor="my-modal" className="btn" type="submit" value="Update Toy" />
                     </div>
                  </form>
               </div>



            </div>
         </div>


      </>
   );
};

export default UpdateModal;


