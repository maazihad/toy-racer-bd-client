import { Link } from "react-router-dom";

const ToyRow = ({ toy, handleDeleteTheToy }) => {
   const { _id, category, email, name, price, quantity, url } = toy;
   return (
      <>
         <tr className="text-md">
            <td>
               <span className="flex items-center space-x-3">
                  <span className="avatar">
                     <span className=" w-16 h-16">
                        {
                           url &&
                           <img src={url} alt="Avatar Tailwind CSS Component" />
                        }
                     </span>
                  </span>
                  <div>
                     <div className="font-bold">{category}</div>
                  </div>
               </span>
            </td>
            <td>
               {name}
            </td>
            <td>{email}</td>
            <td className="text-center">{price}</td>
            <td className="text-center">{quantity}</td>
            <td className="text-center">
               <span className="space-x-1">
                  <Link to={`/updateToy/${_id}`}>
                     <button className="btn btn-sm px-2 capitalize bg-blue-700 hover:bg-red-900">Update</button>
                  </Link>
                  <button onClick={() => handleDeleteTheToy(_id)} className="btn btn-sm px-2 capitalize bg-red-700 hover:bg-red-900">Delete</button>
               </span>
            </td>
         </tr>
      </>
   );
};

export default ToyRow;