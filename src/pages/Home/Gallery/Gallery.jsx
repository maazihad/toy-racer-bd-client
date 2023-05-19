import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
   const [gallery, setGallery] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5555/gallery', {
         method: 'GET',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify()
      })
         .then(res => res.json())
         .then(data => setGallery(data));
   }, []);

   return (
      <section className="bg-red-100 pt-5 pb-10">
         <h2 className="text-5xl font-black py-5 text-center text-red-700">Toy-Racer Gallery</h2>
         <div className="grid lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
            {
               gallery.map(galleryCard => <GalleryCard
                  key={galleryCard._id}
                  galleryCard={galleryCard}
               ></GalleryCard>)
            }
         </div>
      </section>
   );
};

export default Gallery;