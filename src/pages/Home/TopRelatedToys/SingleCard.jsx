

const SingleCard = ({ singleCard }) => {
   const { img, title, price, rating } = singleCard;
   return (
      <div className="card card-side rounded-none">

         <figure><img className="w-[100px] h-[100px] object-cover p-2 rounded-lg" src={img} alt="Toys" /></figure>

         <div className="mt-2 ml-1">
            <p className="font-bold text-xm tracking-tight leading-5">{title}</p>
            <div className="rating rating-xs rating-half ">
               {/* <input type="radio" name={Math.round(rating)} className="rating-hidden" /> */}
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
            <span className='text-xs font-bold ml-2'>
               {rating}
            </span>
            <p className='text-xs font-bold'>${price} USD</p>
         </div>
      </div>
   );
};

export default SingleCard;