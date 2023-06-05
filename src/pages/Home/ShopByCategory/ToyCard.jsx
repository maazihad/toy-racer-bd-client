import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect } from "react";
import AOS from "aos";

const ToyCard = ({ toy }) => {
   const { _id, toyName, picture, price, rating } = toy || {};

   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <div data-aos="fade-up">
         <div className="card w-full bg-base-100 shadow-xl rounded-none">
            <figure><img className="h-80 w-full object-cover" src={picture} alt="Toy Image here" /></figure>
            <div className="card-body">
               <h2 className="card-title text-red-800 font-semibold">Toy Name : {toyName}</h2>
               <div className="flex justify-between my-3">
                  <div>
                     <p className="text-red-900"><b>Price :</b> ${price}</p>
                  </div>
                  <div className=" flex items-center">
                     <Rating
                        className="text-center"
                        style={{ maxWidth: 80 }}
                        value={rating}
                        readOnly
                     />
                     <span className='ms-2 font-bold'>
                        {rating}
                     </span>
                  </div>
               </div>
               <div className="card-actions justify-end">
                  {<Link to={`/toyDetails/${_id}`}>
                     <button className="btn btn-primary btn-sm capitalize hover:shadow-md bg-red-700 hover:bg-red-900 border-0">View Details</button>
                  </Link>

                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default ToyCard;