
const GalleryCard = ({ galleryCard }) => {
   const { _id, img, name, price } = galleryCard;
   return (
      <div className="card bg-base-100 shadow-xl rounded-none">
         <img className="object-cover h-56" src={img} alt="Shoes" />
         <div className="p-5">
            <p className="text-md text-black">{name}</p>
         </div>
      </div>
   );
};

export default GalleryCard;