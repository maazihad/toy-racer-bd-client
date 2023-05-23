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
      // console.log(updateToys);

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

   return (
      <section className="max-w-7xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24 pb-20 min-h-[calc(100vh-80px)]">
         <div className='bg-green-300 pb-10 pt-5 m-5 rounded-lg'>
            <h1 className='lg:text-5xl sm:text-4xl text-green-800 text-center font-bold'>Update Toy</h1>
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
                        <button className="btn btn-success bg-red-700 text-white hover:bg-red-900 hover:text-white">Update this Toy</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </section>
   );
};

export default UpdateToys;