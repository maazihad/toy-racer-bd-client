import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GalleryCard = ({ galleryCard }) => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);

   const { img, name } = galleryCard;
   return (
      <div data-aos="fade-up">
         <div className="card bg-base-100 h-[320px] shadow-xl rounded-none" >
            <img className="object-cover h-56" src={img} alt="Shoes" />
            <div className="p-5" >
               <p className="text-md text-black">{name}</p>
            </div>
         </div>
      </div>
   );
};

export default GalleryCard;