
const CategoryThree = ({ cThree }) => {
   return (
      <div className="card w-full bg-red-100 shadow-xl">
         <figure><img className="h-[300px] object-cover" src={cThree?.picture} alt="Shoes" /></figure>
         <div className="card-body">
            <h2 className="card-title">Name : {cThree?.name}</h2>
            <p>Price : ${cThree?.price}</p>
            <div>
               <div className="rating rating-xs rating-half ">
                  {/* <input type="radio" name={Math.round(rating)} className="rating-hidden" /> */}
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                  <input type="radio" name={Math.round(cThree?.rating)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
               </div>
               <span className='text-xs font-bold ml-2'>
                  {cThree?.rating}
               </span>
            </div>
            <div className="card-actions justify-end">
               <button className="btn btn-sm btn-primary border-0 bg-red-700 hover:bg-red-900 capitalize">View Details</button>
            </div>
         </div>
      </div>
   );
};

export default CategoryThree;