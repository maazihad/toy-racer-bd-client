import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
   return (
      <>
         <Navbar />
         <div className="min-h-[calc(100vh-50px)]">
            <Outlet />
            <Toaster />
         </div>
         <Footer />
      </>
   );
};

export default MainLayout;