

const ToyRow = ({ toy, handleDeleteTheToy }) => {
   console.log(toy);
   const { _id, category, details, email, name, price, quantity, rating, seller, url } = toy;
   return (
      <>
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
               <div className="btn-group bg-transparent">
                  <label htmlFor="my-modal" className="btn btn-sm px-2 capitalize bg-blue-700 hover:bg-red-900">Update</label>
                  <button onClick={() => handleDeleteTheToy(_id)} className="btn btn-sm px-2 capitalize bg-red-700 hover:bg-red-900">Delete</button>
               </div>


            </td>
         </tr>

         <input type="checkbox" id="my-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box">
               <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
               <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
               <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">Yay!</label>
               </div>
            </div>
         </div>
      </>
   );
};

export default ToyRow;