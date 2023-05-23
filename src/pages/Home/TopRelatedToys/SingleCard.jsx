

const SingleCard = ({ singleCard }) => {
   const { img, title, price, rating } = singleCard;
   return (
      <div className="card card-side bg-base-100 shadow-xl">
         <figure><img className="w-[120px] h-[120px] object-cover" src={img} alt="Movie" /></figure>
         <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className=" m-0 p-0 mr-3">
               <div className=" ">
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
            <p>${price}USD</p>
         </div>
      </div>
   );
};

export default SingleCard;