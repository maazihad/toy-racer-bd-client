import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const TopRelatedToys = () => {
   const [topRelatedToys, setTopRelatedToys] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5555/topRelatedToys')
         .then(res => res.json())
         .then(data => setTopRelatedToys(data));
   }, []);

   return (
      <section className="bg-red-100">
         <div className="grid lg:grid-cols-2 gap-5 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:w-full  gap-5">
               {
                  topRelatedToys.map(singleCard => <SingleCard
                     key={singleCard._id}
                     singleCard={singleCard}
                  ></SingleCard>)
               }
            </div>
            <div className="lg:w-full">
               <img className="w-full" src={`https://cdn.shopify.com/s/files/1/1152/4590/files/Untitled-1_e033abd9-8404-4146-a296-1e9f27b0a602_grande.png?v=1676912402`} alt="" />
            </div>
         </div>
      </section>
   );
};

export default TopRelatedToys;