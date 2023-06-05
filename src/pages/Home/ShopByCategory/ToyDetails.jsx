import { Rating } from "@smastrom/react-rating";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";

const ToyDetails = () => {
   const toys = useLoaderData();
   const { toyName, picture, price, rating, details } = toys;
   // console.log(toys);
   const navigation = useNavigation();
   if (navigation.state === 'loading') {
      return <Spinner />;
   }
   return (
      <>
         <Helmet>
            <title>Roy-racer BD || Toy Details</title>
         </Helmet>
         <section className=' bg-red-100  min-h-[calc(100vh-50px)] pb-5'>
            <div className="card w-full max-w-7xl mx-auto bg-base-100 shadow-xl rounded-none">
               <figure><img className='shadow-lg h-[800px] w-full object-cover  rounded-lg' src={picture} alt="Shoes" /></figure>
               <div className="card-body pt-5">
                  <h2 className="card-title">Toy Name : {toyName}</h2>
                  <p><b>Details : </b> {details}</p>
                  <div className="flex justify-between">
                     <div>
                        <p><b>Price :</b> ${price}</p>
                     </div>
                     <div className="flex items-center m-0 p-0 mr-3">
                        <div className=" flex grow items-center">
                           <Rating
                              className="text-center"
                              style={{ maxWidth: 100 }}
                              value={rating}
                              readOnly
                           />
                           <span className='ms-2 font-bold'>
                              {rating}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ToyDetails;