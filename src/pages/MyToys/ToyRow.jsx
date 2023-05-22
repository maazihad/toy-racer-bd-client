import React from 'react';
import { Link } from "react-router-dom";
import UpdateToys from "./UpdateToys";
import { useState } from "react";

const ToyRow = ({ toy, handleDeleteTheToy }) => {

   const [modalShow, setModalShow] = React.useState();

   // console.log(toy);
   const { _id, category, details, email, name, price, quantity, rating, seller, url } = toy;
   return (

      <tr className="text-md">
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className=" w-16 h-16">
                     {
                        url &&
                        <img src={url} alt="Avatar Tailwind CSS Component" />
                     }
                  </div>
               </div>
               <div>
                  <div className="font-bold">{category}</div>
               </div>
            </div>
         </td>
         <td>
            {name}
         </td>
         <td>{email}</td>
         <td className="text-center">{price}</td>
         <td className="text-center">{quantity}</td>
         <td className="text-center">
            <div className="space-x-1">
               {/* <Link to={`/updateToys/${_id}`}>
                  <button className="btn btn-sm px-2 capitalize bg-blue-700 hover:bg-red-900">Update</button>
               </Link> */}
               <button className="btn btn-sm px-2 capitalize bg-blue-700 hover:bg-red-900">Update</button>

               <label htmlFor="my-modal-3" className="btn btn-sm px-2 capitalize bg-blue-700 hover:bg-red-900">update</label>

               <button onClick={() => handleDeleteTheToy(_id)} className="btn btn-sm px-2 capitalize bg-red-700 hover:bg-red-900">Delete</button>
            </div>
         </td>
      </tr>

   );
};

export default ToyRow;