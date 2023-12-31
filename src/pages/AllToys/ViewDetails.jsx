import { useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ViewDetails = () => {
   const toys = useLoaderData();
   console.log(toys);
   const { picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, details } = toys;

   return (
      <>
         <Helmet>
            <title>Roy-racer BD || View Details</title>
         </Helmet>
         <section className=' bg-red-100  min-h-[calc(100vh-50px)] pb-5'>
            <div className="card w-full max-w-7xl mx-auto bg-base-100 shadow-xl rounded-none">
               <figure><img className='shadow-lg h-[500px] w-full object-cover p-5 rounded-lg' src={picture} alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title">Toy Name : {toyName}</h2>
                  <p className="text-lg"><b>Seller Name :</b> {sellerName ? sellerName : null}</p>
                  <p>Details Description : {details}</p>
                  <p><b>Seller Email :</b> {sellerEmail ? sellerEmail : null}</p>

                  <div className="flex justify-between">
                     <div>
                        <p><b>Price :</b> ${price}</p>
                        <p><b>Available Quantity :</b> {availableQuantity}</p>
                     </div>
                     <div className="flex items-center m-0 p-0 mr-3">
                        <div className=" flex grow items-center">
                           <Rating
                              className="text-center"
                              style={{ maxWidth: 100 }}
                              value={rating}
                              readOnly
                           />
                           <span className='ms-2 font-bold'>
                              {rating}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ViewDetails;