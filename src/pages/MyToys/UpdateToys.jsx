import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
   const toy = useLoaderData();
   console.log(toy);
   const { _id, price, quantity, details } = toy || {};
   console.log(_id);


   const handleUpdateMyToy = event => {
      event.preventDefault();
      const form = event.target;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const details = form.details.value;

      const updateToys = {
         price,
         quantity,
         details,
      };
      console.log(updateToys);

      fetch(`http://localhost:5555/myToys/${_id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(updateToys)

      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
               Swal.fire({
                  title: 'Success!',
                  text: 'Update Successfully!!!',
                  icon: 'success',
                  confirmButtonText: 'Coooool'
               });
            }
         });

   };






















   // const { user } = useContext(AuthContext);
   // const { register, handleSubmit, formState: { errors } } = useForm();

   // const onSubmit = data => {
   //    console.log(data);

   // Swal.fire({
   //    title: 'Are you sure?',
   //    text: "You won't be able to revert this!",
   //    icon: 'success',
   //    showCancelButton: true,
   //    confirmButtonColor: '#3085d6',
   //    cancelButtonColor: '#d33',
   //    confirmButtonText: 'Yes, update it!'
   // }).then((result) => {
   //    if (result.isConfirmed) {
   //       fetch(`http://localhost:5555/myToys/${_id}`, {
   //          method: 'PUT',
   //          headers: {
   //             'content-type': 'application/json',
   //          },
   //          body: JSON.stringify(data)
   //       })
   //          .then(res => res.json())
   //          .then(data => {
   //             console.log(data);
   //             if (data.modifiedCount > 0) {
   //                Swal.fire(
   //                   'Updated!',
   //                   'Toy has been updated.',
   //                   'success'
   //                );
   //             }
   //          });
   //    }
   // });

   // };


   return (


      <section className="max-w-7xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24 pb-20 min-h-[calc(100vh-80px)]">
         <div className='bg-green-300 pb-10 pt-5 m-5 rounded-lg'>
            <h1 className='lg:text-5xl sm:text-4xl text-green-800 text-center font-bold'>Update This Toy :  {name}</h1>
            <form onSubmit={handleUpdateMyToy}>

               <div className='lg:flex md:flex gap-5 mx-5 mt-6'>
                  <div className="form-control md:w-full lg:w-full ">
                     <input type="number" name='price' defaultValue={price} placeholder="price" className="input input-bordered" />
                  </div>
                  <div className="form-control md:w-full lg:w-full ">
                     <input type="number" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered" />
                  </div>
               </div>


               <div className="lg:flex md:flex gap-5 mx-5 mt-6">
                  <div className="form-control md:w-full lg:w-full">
                     <input type="text" name='details' defaultValue={details} placeholder="Details..." className="input input-bordered" />
                  </div>
               </div>


               <div className='lg:flex md:flex gap-5 mx-5 mt-6'>
                  <div className="form-control md:w-full lg:w-full ">
                     <div className="form-control">
                        <button className="btn btn-success bg-amber-400 hover:bg-amber-600 hover:text-white">Update this Toy</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </section>


   );
};

export default UpdateToys;












      // <section className="bg-red-100 min-h-[calc(100vh-50px)]">
      //    <h2 className="text-4xl text-center font-black text-red-700 py-10">Update Toy</h2>
      //    <div className="max-w-7xl mx-auto pb-10">
      //       <form onSubmit={handleSubmit(onSubmit)}>
      //          <div className="grid lg:grid-cols-2 gap-5">

      //             {/* ========================Price================ */}
      //             <div className="form-control">
      //                <label className="label font-bold">
      //                   <span className="label-text text-lg">Price</span>
      //                </label>
      //                <input
      //                   className="text-input input input-bordered" {...register("price")} placeholder="price" type="text"
      //                   defaultValue={price}
      //                />
      //             </div>


      //             {/* ========================Quantity================ */}
      //             <div className="form-control">
      //                <label className="label font-bold">
      //                   <span className="label-text text-lg">Quantity</span>
      //                </label>
      //                <input
      //                   className="text-input input input-bordered" {...register("quantity")} placeholder="quantity" type="text"
      //                   defaultValue={quantity}
      //                />
      //             </div>
      //          </div>

      //          {/* ========================Details================ */}
      //          <div className="form-control mt-6">
      //             <label className="label font-bold">
      //                <span className="label-text text-lg">Product Details</span>
      //             </label>
      //             <input
      //                className="text-input input input-bordered" {...register("details")} placeholder="details in product" type="text"
      //                defaultValue={details}
      //             />
      //          </div>

      //          <div className="form-control mt-6">
      //             <input className="submit-btn btn btn-primary bg-red-700 hover:bg-red-900 border-0 capitalize text-lg" value="Update Toy" type="submit" />
      //          </div>
      //       </form>
      //    </div>
      // </section>