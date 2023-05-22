import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ toy }) => {

   const { _id, picture, name, subCategory, sellerName, sellerEmail, price, rating, availableQuantity, details } = toy;



   return (
      <tr className="text-md">
         <td>
            {sellerName}
         </td>
         <td>
            {name}
         </td>
         <td>{subCategory.map((singleName, i) => <li
            key={i}
         >
            {singleName}
         </li>)}</td>
         <td className="text-center">{price}</td>
         <td className="text-center">{availableQuantity}</td>
         <td className="text-center">
            <div className="space-x-1">
               <Link to={`/toy/${_id}`}>
                  <button className="btn btn-sm px-2 capitalize bg-blue-700 hover:bg-red-900">View Details</button>
               </Link>

            </div>
         </td>
      </tr>
   );
};

export default AllToysTable;