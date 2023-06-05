import { Helmet } from "react-helmet";

const Marketing = () => {
   return (
      <>
         <Helmet>
            <title>Toy-Racer BD - Marketing</title>
         </Helmet>
         <div className=' bg-red-100  min-h-[calc(100vh-50px)] pb-5'>
            <div className=" pt-5  max-w-7xl mx-auto bg-red-100 shadow-xl">
               <div className="bg-red-500 lg:w-3/5 mx-auto  py-4 rounded-full">
                  <div className="container mx-auto px-4">
                     <h1 className="text-3xl text-center text-white font-bold">Toy-Racer BD Marketing Policy</h1>
                  </div>
               </div>
               <div className="container mx-auto px-4 py-8">
                  <div className="md:flex">
                     <div className="md:w-1/2 md:mr-4">
                        <h2 className="text-2xl font-bold mb-4">Our Marketing Approach</h2>
                        <p className="mb-4">
                           At Toy-Racer BD, we believe in creating a strong connection with our customers through effective marketing strategies. Our marketing approach focuses on delivering value, building brand loyalty, and engaging with our target audience in meaningful ways.
                        </p>
                        <p className="mb-4">
                           We understand the importance of a comprehensive marketing plan that aligns with our business objectives. By leveraging the power of digital platforms, social media, and traditional marketing channels, we aim to reach a wider audience and maximize our brand&apos;s visibility.
                        </p>
                        <p className="mb-4">
                           Our marketing team is dedicated to staying up-to-date with the latest industry trends and consumer behaviors. This enables us to create compelling campaigns that resonate with our customers and drive tangible results.
                        </p>
                     </div>
                     <div className="md:w-1/2 md:ml-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuJAwCB3qbRyXZgZzIbA_2nn9GE1c77V_1g&usqp=CAU" className="w-full rounded-lg" />
                     </div>
                  </div>
                  <div className="mt-8">
                     <h2 className="text-2xl font-bold mb-4">Key Marketing Strategies</h2>
                     <ul className="list-disc list-inside">
                        <li className="mb-2">Content Marketing: We create informative and engaging content to educate our audience about our products and industry.</li>
                        <li className="mb-2">Social Media Marketing: We utilize social media platforms to connect with our customers, share updates, and build a community.</li>
                        <li className="mb-2">Influencer Partnerships: We collaborate with influential individuals in the industry to promote our brand and products.</li>
                        <li className="mb-2">Email Marketing: We leverage email campaigns to nurture customer relationships and keep them informed about new offerings.</li>
                        <li className="mb-2">Targeted Advertising: We use data-driven insights to target specific customer segments and optimize our advertising efforts.</li>
                     </ul>
                  </div>
                  <div className="mt-8">
                     <h2 className="text-2xl font-bold mb-4">Customer-Centric Approach</h2>
                     <p className="mb-4">
                        Our customers are at the heart of everything we do. We strive to understand their needs, preferences, and pain points to deliver tailored marketing campaigns that resonate with them.
                     </p>
                     <p className="mb-4">
                        We actively seek feedback from our customers and value their opinions. This helps us improve our products, services, and marketing strategies, ensuring we meet and exceed their expectations.
                     </p>
                     <p className="mb-4">
                        Additionally, we believe in transparency and open communication. We provide clear and concise information about our products, pricing, and policies, enabling our customers to make informed decisions.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Marketing;