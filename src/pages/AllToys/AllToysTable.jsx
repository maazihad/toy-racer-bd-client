
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AllToysTable = ({ toy, index }) => {
   const { register } = useForm();
   const { _id, toyName, subCategory, sellerName, price, availableQuantity } = toy;


   return (
      <tr className="text-md">
         <td>
            {index + 1}
         </td>
         <td className="font-bold">
            {sellerName ? sellerName : null}
         </td>
         <td>
            {toyName}
         </td>
         <td>
            <select className="text-input input input-bordered w-52 border-0 " {...register("category")}>
               {
                  subCategory.map((singleName, i) => <option key={i}>{singleName}</option>)
               }
            </select>
         </td>
         <td className="text-center">{price}</td>
         <td className="text-center">{availableQuantity}</td>
         <td className="text-center">
            <div className="space-x-1">
               <Link to={`/toy/${_id}`}>
                  <button className="btn btn-sm px-2 capitalize border-0 bg-red-700 hover:bg-red-900">View Details</button>
               </Link>
            </div>
         </td>
      </tr>
   );
};

export default AllToysTable;