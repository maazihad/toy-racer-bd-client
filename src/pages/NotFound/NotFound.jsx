import { Link, useRouteError } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import notFound from "../../assets/notfound/404.json";
import Lottie from "lottie-react";

const NotFound = () => {
   const { error } = useRouteError();
   // console.log(error);
   return (
      <section className='bg-red-200 flex items-center h-screen'>
         <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <div className='max-w-md text-center'>
               <Lottie animationData={notFound} />
               <p className='text-red-500 font-semibold md:text-3xl mb-8'>
                  Message : {error?.message}
               </p>
               <Link
                  to='/'
               >
                  <button className=' bg-red-700 btn capitalize  border-0 text-yellow-300   px-4 rounded-none rounded-l-full hover:bg-amber-700 '>
                     <ArrowLeftIcon className="h-5 w-5 text-gray-100 mr-2" />
                     back to home
                  </button>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default NotFound;