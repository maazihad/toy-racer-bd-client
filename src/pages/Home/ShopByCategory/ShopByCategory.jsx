
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {

   /* const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch('/fakeData2.json')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setCategories(data);
         });
   }, []); */

   return (
      <>
         {/* <section className="bg-red-200">
         <div className="max-w-7xl mx-auto">

            <Tabs>
               <TabList>
                  <Tab>{categories[0].category}</Tab>
                  <Tab>{categories[1].category}</Tab>
                  <Tab>{categories[2].category}</Tab>
               </TabList>


               <TabPanel>
                  {
                     categories.map(singleCategory => <SingleCategory key={singleCategory._id} singleCategory={singleCategory}></SingleCategory>)
                  }
               </TabPanel>
            </Tabs>


         </div>
      </section> */}
      </>
   );
};

export default ShopByCategory;