import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateToys = () => {
   const toy = useLoaderData();
   console.log(toy);
   const { _id, price, quantity, details } = toy;
   console.log(_id);

   // const { user } = useContext(AuthContext);
   const { register, handleSubmit, formState: { errors } } = useForm();

   const onSubmit = data => {
      console.log(data);

      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'success',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, update it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5555/myToys/${_id}`, {
               method: 'PUT',
               headers: {
                  'content-type': 'application/json',
               },
               body: JSON.stringify(data)
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.modifiedCount > 0) {
                     Swal.fire(
                        'Updated!',
                        'Toy has been updated.',
                        'success'
                     );
                  }
               });
         }
      });

   };


   return (
      <section className="bg-red-100 min-h-[calc(100vh-50px)]">
         <h2 className="text-4xl text-center font-black text-red-700 py-10">Update Toy</h2>
         <div className="max-w-7xl mx-auto pb-10">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="grid lg:grid-cols-2 gap-5">

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

               <div className="form-control mt-6">
                  <input className="submit-btn btn btn-primary bg-red-700 hover:bg-red-900 border-0 capitalize text-lg" value="Update Toy" type="submit" />
               </div>
            </form>
         </div>
      </section>
   );
};

export default UpdateToys;