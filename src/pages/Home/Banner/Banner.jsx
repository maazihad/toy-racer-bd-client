import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);
   return (
      <div data-aos="fade-right">
         <div className="carousel w-full h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
               <img src={`https://images.unsplash.com/photo-1665779933484-ca120461551e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`} className="w-full object-cover" />

               <div className="absolute rounded-xl w-full lg:w-1/2 text-white  h-full  right-0 bg-gradient-to-l from-[#000000] to-[rgba(30, 30, 45, .5)]">

                  <div className="mr-16 absolute bottom-0 mb-32 space-y-8 ">
                     <h2 className='lg:leading-[6rem] text-4xl text-center lg:text-7xl font-bold lg:text-right'>Accelerate Your Imagination with <span className="lg:bg-red-700">Toy-</span><span className='lg:bg-purple-700'>racer!</span></h2>
                     <p className="text-lg text-center lg:text-right bg-gradient-to-b from-black to-[rgba(255, 155, 255, .2)]">Toy-racer: Where Imagination Takes the Wheel! Unleash boundless fun and adventure with our dynamic collection of toy cars.</p>
                     <div className='text-center lg:text-right'>
                        <Link to="/allToys">
                           <button className="btn border-white capitalize  btn-outline text-white hover:bg-red-700">See All Toys</button>
                        </Link>
                     </div>
                  </div>
               </div>


               <div className="absolute flex  transform space-x-5 -translate-x-3/4 left-1/2 bottom-0 pb-5 ">
                  <a href="#slide4" className="btn btn-circle bg-red-500 border-0 hover:bg-red-600"><FaAngleDoubleLeft className='text-xl' /></a>
                  <a href="#slide2" className="btn btn-circle bg-red-500 border-0 hover:bg-red-600"><FaAngleDoubleRight className='text-xl' /></a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               <img src={`https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} className="w-full object-cover" />
               <div className="absolute rounded-xl w-full lg:w-1/2 text-white  h-full  right-0 bg-gradient-to-l from-[#000000] to-[rgba(30, 30, 45, .5)]">
                  <div className="mr-16 absolute bottom-0 mb-32 space-y-8 ">
                     <h2 className='lg:leading-[6rem] text-4xl text-center lg:text-7xl font-bold lg:text-right'>Fuel Your Playtime Adventure with  <br /> <span className="lg:bg-red-700 ">Toy-</span><span className='lg:bg-purple-700'>racer!</span></h2>
                     <p className="text-lg text-center lg:text-right bg-gradient-to-b from-black to-[rgba(255, 155, 255, .2)]">Experience the joy of play with Toy-racer! Our high-quality toys ignite creativity and provide endless hours of racing excitement.</p>
                     <div className='text-center lg:text-right'>
                        <button className="btn border-white capitalize  btn-outline text-white hover:bg-red-700">See All Toys</button>
                     </div>
                  </div>
               </div>
               <div className="absolute flex  transform space-x-5 -translate-x-3/4 left-1/2 bottom-0 pb-5 ">
                  <a href="#slide1" className="btn btn-circle bg-red-500 border-0 hover:bg-red-600"><FaAngleDoubleLeft className='text-xl' /></a>
                  <a href="#slide3" className="btn btn-circle bg-red-500 border-0 hover:bg-red-600"><FaAngleDoubleRight className='text-xl' /></a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <img src={`https://images.pexels.com/photos/242200/pexels-photo-242200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} className="w-full object-cover" />
               <div className="absolute rounded-xl w-full lg:w-1/2 text-white  h-full  right-0 bg-gradient-to-l from-[#000000] to-[rgba(30, 30, 45, .5)]">
                  <div className="mr-16 absolute bottom-0 mb-32 space-y-8 ">
                     <h2 className='lg:leading-[6rem] text-4xl text-center lg:text-7xl font-bold lg:text-right'>Experience the Fast Lane of Fun with <span className="lg:bg-red-700 ">Toy-</span><span className='lg:bg-purple-700'>racer!</span></h2>
                     <p className="text-lg text-center lg:text-right bg-gradient-to-b from-black to-[rgba(255, 155, 255, .2)]">Get ready for the ultimate playtime thrill! Toy-racer offers a diverse range of toy cars designed to fuel your child&apos;s imagination.</p>
                     <div className='text-center lg:text-right'>
                        <button className="btn border-white capitalize  btn-outline text-white hover:bg-red-700">See All Toys</button>
                     </div>
                  </div>
               </div>
               <div className="absolute flex  transform space-x-5 -translate-x-3/4 left-1/2 bottom-0 pb-5 ">
                  <a href="#slide2" className="btn btn-circle bg-red-500 border-0 hover:bg-red-600"><FaAngleDoubleLeft className='text-xl' /></a>
                  <a href="#slide4" className="btn btn-circle bg-red-500 border-0 hover:bg-red-600"><FaAngleDoubleRight className='text-xl' /></a>
               </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               <img src={`https://images.unsplash.com/photo-1595665040267-afac7657b815?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80`} className="w-full object-cover" />
               <div className="absolute rounded-xl w-full lg:w-1/2 text-white  h-full  right-0 bg-gradient-to-l from-[#000000] to-[rgba(30, 30, 45, .5)]">
                  <div className="mr-16 absolute bottom-0 mb-32 space-y-8 ">
                     <h2 className='lg:leading-[6rem] text-4xl text-center lg:text-7xl font-bold lg:text-right'>Ignite the Thrill of Play with Toy-racer <span className="lg:bg-red-700 ">Toy-</span><span className='lg:bg-purple-700'>racer!</span></h2>
                     <p className="text-lg text-center lg:text-right bg-gradient-to-b from-black to-[rgba(255, 155, 255, .2)]">Ignite your child&apos;s passion for speed and imagination with Toy-racer! Our toys bring action-packed racing adventures to life.</p>
                     <div className='text-center lg:text-right'>
                        <button className="btn border-white capitalize  btn-outline text-white hover:bg-red-700">See All Toys</button>
                     </div>
                  </div>
               </div>
               <div className="absolute flex  transform space-x-5 -translate-x-3/4 left-1/2 bottom-0 pb-5 ">
                  <a href="#slide3" className="btn btn-circle bg-red-500 border-0 hover:bg-red-600"><FaAngleDoubleLeft className='text-xl' /></a>
                  <a href="#slide1" className="btn btn-circle bg-red-500 border-0 hover:bg-red-600"><FaAngleDoubleRight className='text-xl' /></a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;