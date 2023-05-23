
const CategoryOne = ({ cOne }) => {
   return (
      <div className="card w-full bg-red-100 shadow-xl rounded-md">
         <figure><img className="h-[300px] object-cover" src={cOne?.picture} alt="Shoes" /></figure>
         <div className="card-body">
            <h2 className="card-title">Name : {cOne?.name}</h2>
            <p>Price : ${cOne?.price}</p>
            <div>
               <div className="rating rating-xs rating-half ">
                  {/* <input type="radio" name={Math.round(rating)} className="rating-hidden" /> */}
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cOne?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
               </div>
               <span className='text-xs font-bold ml-2'>
                  {cOne?.rating}
               </span>
            </div>
            <div className="card-actions justify-end">
               <button className="btn btn-sm border-0 btn-primary bg-red-700 hover:bg-red-900 capitalize">View Details</button>
            </div>
         </div>
      </div>
   );
};

export default CategoryOne;