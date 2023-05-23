import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { Helmet } from "react-helmet";
const Home = () => {
   return (
      <>
         <Helmet>
            <title>Toy-Racer BD - Home</title>
            <meta name="description" content="Welcome to home page" />
         </Helmet>
         <Banner />
         <Gallery />
         <ShopByCategory />
      </>
   );
};

export default Home;