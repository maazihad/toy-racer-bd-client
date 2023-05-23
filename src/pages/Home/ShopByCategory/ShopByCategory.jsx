
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
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
      <Tabs>
         <TabList>
            <Tab>Mario</Tab>
            <Tab disabled>Luigi</Tab>
            <Tab>Peach</Tab>
            <Tab>Yoshi</Tab>
            <Tab>Toad</Tab>
         </TabList>

         <TabPanel>
            <p>

            </p>
            <p>

            </p>
         </TabPanel>

      </Tabs>
   );
};

export default ShopByCategory;