import { useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet";

const ShopViewDetails = () => {
   const toys = useLoaderData();
   console.log(toys);
   const { _id, picture, name, sellerName, sellerEmail, price, rating, availableQuantity, details } = toys;

   console.log(toys);
   return (
      <>
         <Helmet>
            <title>Shop Category Details || Roy-racer BD</title>
            <meta name="description" content="Welcome to home page" />
         </Helmet>
         <section className=' bg-red-100  min-h-[calc(100vh-50px)] pb-5'>
            <div className="card w-full max-w-7xl mx-auto bg-base-100 shadow-xl rounded-none">
               <figure><img className='shadow-lg h-[500px] w-full object-cover p-5 rounded-lg' src={picture} alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title">Toy Name : {name}</h2>
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
                           <div className="rating rating-sm rating-half ">
                              <input type="radio" name={Math.round(rating)} className="rating-hidden" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                              <input type="radio" name={Math.round(rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                           </div>
                           <span className='ms-2 font-bold'>
                              {rating}
                           </span>
                        </div>
                     </div>
                  </div>
                  {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-red-700 hover:bg-red-900 border-0 capitalize btn-sm w-32 rounded-none">Add this toy</button>
               </div> */}
               </div>
            </div>
         </section>
      </>
   );
};

export default ShopViewDetails;