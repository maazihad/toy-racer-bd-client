
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyTab from './ToyTab';

const ShopByCategory = () => {
   const [tabIndex, setTabIndex] = useState(0);
   const [toys, setMyToys] = useState([]);

   useEffect(() => {
      fetch("https://toy-racer-bd-server.vercel.app/shopToys", {
         method: "GET",
      })
         .then((res) => res.json())
         .then((data) => {
            setMyToys(data);
         });
   }, []);

   //===========sub-category: Vintage Toy cars
   const pickups = toys.filter(toy => toy.subCategory === "pickups");
   const roadsters = toys.filter(toy => toy.subCategory === "roadsters");
   const sedans = toys.filter(toy => toy.subCategory === "sedans");

   //===========sub-category : racing toy cars
   const speedsters = toys.filter(toy => toy.subCategory === "speedsters");
   const supercars = toys.filter(toy => toy.subCategory === "supercars");
   const thunderbolts = toys.filter(toy => toy.subCategory === "thunderbolts");

   //=============off-road toy cars 
   const warriors = toys.filter(toy => toy.subCategory === "warriors");
   const monsters = toys.filter(toy => toy.subCategory === "monsters");
   const recons = toys.filter(toy => toy.subCategory === "recons");


   return (
      <section className='bg-red-100 py-10'>
         <h2 className="text-center text-red-900  text-6xl lobster py-5">Shop By Category</h2>
         <p className="text-center text-xl uppercase mb-5">This is our best Categories</p>
         <div className='mx-auto max-w-7xl'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
               <TabList className="flex gap-3 justify-center">
                  <Tab className="text-md py-2 px-3 cursor-pointer bg-red-700 text-white hover:bg-red-900 hover:text-red-200">Vintage Toy Cars</Tab>
                  <Tab className="text-md py-2 px-3 cursor-pointer bg-red-700 text-white hover:bg-red-900 hover:text-red-200">Racing Toy Cars</Tab>
                  <Tab className="text-md py-2 px-3 cursor-pointer bg-red-700 text-white hover:bg-red-900 hover:text-red-200">Off-road Toy Cars</Tab>
               </TabList>
               <TabPanel>
                  <Tabs>
                     <TabList>
                        <Tab>Pickups</Tab>
                        <Tab>Roadsters</Tab>
                        <Tab>Sedans</Tab>
                     </TabList>
                     <TabPanel>
                        <ToyTab toys={pickups}></ToyTab>
                     </TabPanel>
                     <TabPanel>
                        <ToyTab toys={roadsters}></ToyTab>
                     </TabPanel>
                     <TabPanel>
                        <ToyTab toys={sedans}></ToyTab>
                     </TabPanel>
                  </Tabs>
               </TabPanel>
               <TabPanel>
                  <Tabs>
                     <TabList>
                        <Tab>Speedsters</Tab>
                        <Tab>Supercars</Tab>
                        <Tab>Thunderbolts</Tab>
                     </TabList>
                     <TabPanel>
                        <ToyTab toys={speedsters}></ToyTab>
                     </TabPanel>
                     <TabPanel>
                        <ToyTab toys={supercars}></ToyTab>
                     </TabPanel>
                     <TabPanel>
                        <ToyTab toys={thunderbolts}></ToyTab>
                     </TabPanel>
                  </Tabs>
               </TabPanel>
               <TabPanel>
                  <Tabs>
                     <TabList>
                        <Tab>Warriors</Tab>
                        <Tab>Monsters</Tab>
                        <Tab>Recons</Tab>
                     </TabList>
                     <TabPanel>
                        <ToyTab toys={warriors}></ToyTab>
                     </TabPanel>
                     <TabPanel>
                        <ToyTab toys={monsters}></ToyTab>
                     </TabPanel>
                     <TabPanel>
                        <ToyTab toys={recons}></ToyTab>
                     </TabPanel>
                  </Tabs>
               </TabPanel>
            </Tabs>
         </div>
      </section>
   );
};

export default ShopByCategory;