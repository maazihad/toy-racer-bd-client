import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ShopByAge = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <section className="bg-red-100 min-h-[calc(100vh-300px)] py-8">
         <div className=" max-w-7xl mx-auto shadow-lg shadow-red-500 pb-12 rounded-lg ">
            <h2 className="text-center text-red-900  text-5xl gamjaFlower py-5">Show by Age</h2>
            <div data-aos="fade-up">
               <div className="grid lg:grid-cols-6 md:grid-cols-3 mx-5 gap-5">
                  <div>
                     <img className="w-full" src={`https://cdn.shopify.com/s/files/1/1152/4590/files/category_img1.png?v=1676031096`} alt="" />
                     <p className="mt-3 gamjaFlower text-3xl font-bold text-center">For baby</p>
                  </div>
                  <div>
                     <img className="w-full" src={`https://cdn.shopify.com/s/files/1/1152/4590/files/category_img2.png?v=1676031123`} alt="" />
                     <p className="mt-3 gamjaFlower text-3xl font-bold text-center">1 to 2 years</p>
                  </div>
                  <div>
                     <img className="w-full" src={`https://cdn.shopify.com/s/files/1/1152/4590/files/category_img3.png?v=1676029617`} alt="" />
                     <p className="mt-3 gamjaFlower text-3xl font-bold text-center">2 to 4 years</p>
                  </div>
                  <div>
                     <img className="w-full" src={`https://cdn.shopify.com/s/files/1/1152/4590/files/category_img4.png?v=1676031270`} alt="" />
                     <p className="mt-3 gamjaFlower text-3xl font-bold text-center">5 to 7 years</p>
                  </div>
                  <div>
                     <img className="w-full" src={`https://cdn.shopify.com/s/files/1/1152/4590/files/category_img5.png?v=1676031270`} alt="" />
                     <p className="mt-3 gamjaFlower text-3xl font-bold text-center">8 to 11 years</p>
                  </div>
                  <div>
                     <img className="w-full" src={`https://cdn.shopify.com/s/files/1/1152/4590/files/category_img6.png?v=1676031270`} alt="" />
                     <p className="mt-3 gamjaFlower text-3xl font-bold text-center">12 years & up</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ShopByAge;