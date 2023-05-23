import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";

const TopRelatedToys = () => {
   const [topRelatedToys, setTopRelatedToys] = useState([]);

   useEffect(() => {
      fetch('https://toy-racer-bd-server.vercel.app/topRelatedToys')
         .then(res => res.json())
         .then(data => setTopRelatedToys(data));
   }, []);

   return (
      <section className="bg-red-100 py-10">
         <h2 className="text-center text-red-900  text-6xl lobster py-5">Top Related Products</h2>
         <p className="text-center text-xl uppercase mb-5">Our bes products</p>
         <div className="grid lg:grid-cols-2 gap-5 mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 lg:w-full">
               {
                  topRelatedToys.map(singleCard => <SingleCard
                     key={singleCard._id}
                     singleCard={singleCard}
                  ></SingleCard>)
               }
            </div>
            <div className="lg:w-full hidden  lg:block lg:h-full relative">
               <img className="w-full rounded-lg min-h-[500px] object-cover" src={`https://cdn.shopify.com/s/files/1/1152/4590/files/Untitled-1_e033abd9-8404-4146-a296-1e9f27b0a602_grande.png?v=1676912402`} alt="" />
               <div className="absolute text-center top-36  left-1/2  transform -translate-x-1/2">
                  <Link to="/allToys" className="text-yellow-500 underline font-bold text-4xl gamjaFlower">SUMMER SALE</Link>
                  <h3 className="text-4xl font-bold text-black gamjaFlower ">Up to 10% off only for all new customers</h3>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TopRelatedToys;