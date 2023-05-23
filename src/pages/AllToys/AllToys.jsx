import { useLoaderData } from "react-router-dom";
import AllToysTable from "./AllToysTable";
import { useState } from "react";
import { Helmet } from "react-helmet";
const AllToys = () => {
   const allToys = useLoaderData();
   const [toys, setToys] = useState(allToys);
   const [searchToyName, setSearchToyName] = useState("");
   console.log(toys);

   const handleSearchByText = () => {
      fetch(`http://localhost:5555/searchByToyName/${searchToyName ? searchToyName : 'car'}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setToys(data);
         });
   };
   return (
      <>
         <Helmet>
            <title>Toy-Racer BD - All Toys</title>
            <meta name="description" content="Welcome to home page" />
         </Helmet>

         <section className="bg-red-100 pb-20">
            <div className="overflow-x-auto w-full mx-auto max-w-7xl  ">
               <div className="flex gap-5 justify-center pt-5">
                  <div className="form-control flex justify-center  ">
                     <div className="input-group">
                        <input
                           onChange={(event) => setSearchToyName(event.target.value)}
                           type="text" placeholder="Search by toy name" className="input mb-5 "
                        />
                        <button
                           onClick={handleSearchByText} className="btn bg-red-900 hover:bg-red-800 btn-square">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                     </div>
                  </div>
               </div>
               <table className="table w-full table-zebra">
                  {/* head */}
                  <thead className=" ">
                     <tr >
                        <th>S.N.</th>
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
                        toys.map((toy, index) => <AllToysTable
                           index={index}
                           key={toy._id}
                           toy={toy}
                        >
                        </AllToysTable>)
                     }
                  </tbody>
               </table>
            </div>
         </section>
      </>
   );
};

export default AllToys;