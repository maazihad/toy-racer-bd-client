

const ToyRow = ({ toy, handleDeleteTheToy }) => {
   console.log(toy);
   const { _id, category, details, email, name, price, quantity, rating, seller, url } = toy;
   return (
      <tr>

         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
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
         <td>{price}</td>
         <td>{quantity}</td>

         <td>
            <button onClick={() => handleDeleteTheToy(_id)} className="btn btn-circle btn-sm bg-purple-100">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
         </td>
      </tr>
   );
};

export default ToyRow;