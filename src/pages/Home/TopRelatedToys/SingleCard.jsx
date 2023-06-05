import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const SingleCard = ({ singleCard }) => {
   const { img, title, price, rating } = singleCard;
   return (
      <div className="flex justify-between gap-3">
         <div className="w-4/12 mb-2">
            <img className="w-24 h-24 object-cover rounded-lg shadow-md" src={img} alt="Toys" />
         </div>

         <div className="w-8/12 mr-3">
            <div>
               <p className="font-bold text-xm tracking-tight leading-5 my-4">{title}</p>
            </div>
            <div className="flex justify-between gap-3">
               <div className="flex justify-center items-center">
                  <Rating
                     className="text-center"
                     style={{ maxWidth: 70 }}
                     value={rating}
                     readOnly
                  />
                  <span className='text-xs font-bold '>
                     {rating}
                  </span>
               </div>
               <div>
                  <p className='text-xs font-bold'>${price} USD</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleCard;