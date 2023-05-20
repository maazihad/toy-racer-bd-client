
const AllToys = () => {
   return (
      <div className="overflow-x-auto w-full">
         <table className="table w-full">
            {/* head */}
            <thead>
               <tr>
                  <th>
                     <label>
                        <input type="checkbox" className="checkbox" />
                     </label>
                  </th>
                  <th>Name&Pic</th>
                  <th>Title</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Status</th>
               </tr>
            </thead>
            <tbody>

            </tbody>
         </table>
      </div>
   );
};

export default AllToys;