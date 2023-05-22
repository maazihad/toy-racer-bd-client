import { useLoaderData } from "react-router-dom";
import AllToysTable from "./AllToysTable";

const AllToys = () => {

   const allToys = useLoaderData();
   console.log(allToys);

   return (
      <section className="bg-red-100 pb-20">
         <div className="overflow-x-auto w-full mx-auto max-w-7xl">
            <h2 className="text-center text-red-700 font-bold text-3xl py-5" >
               total toys: {allToys.length}</h2>
            <table className="table w-full">
               {/* head */}
               <thead>
                  <tr >
                     <th>Seller Name</th>
                     <th>Toy Name</th>
                     <th>Sub Category</th>
                     <th>Price</th>
                     <th>Available Quantity</th>
                     <th className="text-center">View Details</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     allToys.map(toy => <AllToysTable
                        key={toy._id}
                        toy={toy}
                     >
                     </AllToysTable>)
                  }
               </tbody>
            </table>
         </div>
      </section>
   );
};

export default AllToys;