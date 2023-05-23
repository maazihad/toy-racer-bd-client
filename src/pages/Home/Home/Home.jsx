import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByAge from "../ShopByAge/ShopByAge";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { Helmet } from "react-helmet";
const Home = () => {
   return (
      <>
         <div className="min-h-[calc(100vh-50px)]">
            <Helmet>
               <title>Toy-Racer BD - Home</title>
               <meta name="description" content="Welcome to home page" />
            </Helmet>
            <Banner />
            <Gallery />
            <ShopByCategory />
            <ShopByAge />
         </div>
      </>
   );
};

export default Home;