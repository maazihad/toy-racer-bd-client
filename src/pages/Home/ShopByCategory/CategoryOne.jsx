import React from 'react';

const CategoryOne = ({ cOne }) => {
   return (
      <div className="card w-full bg-base-100 shadow-xl">
         <figure><img className="h-[300px] object-cover" src={cOne?.picture} alt="Shoes" /></figure>
         <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
               <button className="btn btn-primary">Buy Now</button>
            </div>
         </div>
      </div>
   );
};

export default CategoryOne;