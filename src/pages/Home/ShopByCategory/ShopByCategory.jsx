
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryOne from './CategoryOne';
import CategoryTwo from './CategoryTwo';
import CategoryThree from './CategoryThree';

const ShopByCategory = () => {

   const [shopByCategories, setShopByCategories] = useState([]);
   useEffect(() => {
      const url = 'https://toy-racer-bd-server.vercel.app/shopByCatagories';
      fetch(url)
         .then(res => res.json())
         .then(data => {
            console.log(data[0].category_1);
            setShopByCategories(data[0]);
         });
   }, []);

   return (
      <section className='bg-red-100 py-10'>
         <h2 className="text-center text-red-900  text-6xl lobster py-5">Shop By Category</h2>
         <p className="text-center text-xl uppercase mb-5">This is our best Categories</p>
         <div className='mx-auto max-w-7xl'>

            <Tabs>
               <TabList className=" text-center space-x-5 mb-2">
                  <Tab className="btn capitalize text-lg hover:bg-red-700 border-none btn-outline">Vintage Toy Cars</Tab>
                  <Tab className="btn capitalize text-lg hover:bg-red-700 border-none btn-outline">Racing Toy Cars</Tab>
                  <Tab className="btn capitalize text-lg hover:bg-red-700 border-none btn-outline">Off-Road Toy Cars</Tab>
               </TabList>


               <TabPanel>
                  <Tabs>
                     <TabList className="no-underline text-center space-x-5 mb-8">
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Die-cast Toy Cars</Tab>
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Tinplate Toy Cars</Tab>
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Pedal Cars</Tab>
                     </TabList>


                     <TabPanel >
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_1?.map(cOne => <CategoryOne
                                 key={cOne.car_id}
                                 cOne={cOne}
                              ></CategoryOne>)
                           }
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_2?.map(cTwo => <CategoryTwo
                                 key={cTwo.car_id}
                                 cTwo={cTwo}
                              ></CategoryTwo>)
                           }
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_3?.map(cThree => <CategoryThree
                                 key={cThree.car_id}
                                 cThree={cThree}
                              ></CategoryThree>)
                           }
                        </div>
                     </TabPanel>
                  </Tabs>
               </TabPanel>


               <TabPanel>
                  <Tabs>
                     <TabList className="no-underline text-center space-x-5 mb-8">
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Slot Cars</Tab>
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Remote-Controlled (RC) Cars</Tab>
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Scale Model Race Cars</Tab>
                     </TabList>

                     <TabPanel >
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_1?.map(cOne => <CategoryOne
                                 key={cOne.car_id}
                                 cOne={cOne}
                              ></CategoryOne>)
                           }
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_2?.map(cTwo => <CategoryTwo
                                 key={cTwo.car_id}
                                 cTwo={cTwo}
                              ></CategoryTwo>)
                           }
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_3?.map(cThree => <CategoryThree
                                 key={cThree.car_id}
                                 cThree={cThree}
                              ></CategoryThree>)
                           }
                        </div>
                     </TabPanel>
                  </Tabs>
               </TabPanel>


               <TabPanel>
                  <Tabs>
                     <TabList className="no-underline text-center space-x-5 mb-8">
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Monster Trucks</Tab>
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Rock Crawlers</Tab>
                        <Tab className="btn capitalize text-md hover:bg-red-700 border-none btn-outline">Off-Road Toy Cars</Tab>
                     </TabList>

                     <TabPanel >
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_1?.map(cOne => <CategoryOne
                                 key={cOne.car_id}
                                 cOne={cOne}
                              ></CategoryOne>)
                           }
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_2?.map(cTwo => <CategoryTwo
                                 key={cTwo.car_id}
                                 cTwo={cTwo}
                              ></CategoryTwo>)
                           }
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="grid lg:grid-cols-3 gap-5">
                           {
                              shopByCategories?.category_3?.map(cThree => <CategoryThree
                                 key={cThree.car_id}
                                 cThree={cThree}
                              ></CategoryThree>)
                           }
                        </div>
                     </TabPanel>
                  </Tabs>
               </TabPanel>

            </Tabs>







         </div>
      </section>
   );
};

export default ShopByCategory;