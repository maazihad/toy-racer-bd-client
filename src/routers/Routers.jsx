import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/LoginRegister/Login/Login";
import Register from "../pages/LoginRegister/Register/Register";
import Blog from "../pages/Blogs/Blog";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import SecureRoute from "./SecureRoute";
import UpdateToys from "../pages/MyToys/UpdateToys";
import ViewDetails from "../pages/AllToys/ViewDetails";
import ToyDetails from "../pages/Home/ShopByCategory/ToyDetails";
import Marketing from "../pages/FooterExtraPages/Marketing";
import AboutUs from "../pages/FooterExtraPages/AboutUs";
import Contact from "../pages/FooterExtraPages/Contact";
import FooterLayout from "../layouts/FooterLayout";
import TermsAndConditions from "../pages/FooterExtraPages/TermsAndConditions";
import Policy from "../pages/FooterExtraPages/Policy";

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'register',
            element: <Register />
         },
         {
            path: 'blog',
            element: <Blog />
         },
         {
            path: 'allToys',
            element: <AllToys />,
            loader: () => fetch('https://toy-racer-bd-server.vercel.app/allToys')
         },
         {
            path: "toy/:id",
            element: <SecureRoute><ViewDetails /></SecureRoute>,
            loader: ({ params }) => fetch(`https://toy-racer-bd-server.vercel.app/singleToy/${params.id}`)
         },
         {
            path: "toyDetails/:id",
            element: <SecureRoute><ToyDetails /></SecureRoute>,
            loader: ({ params }) => fetch(`https://toy-racer-bd-server.vercel.app/toyDetails/${params.id}`)
         },
         {
            path: 'addAToy',
            element: <SecureRoute><AddToy /></SecureRoute>
         },
         {
            path: 'myToys',
            element: <SecureRoute><MyToys /></SecureRoute>
         },
         {
            path: "updateToy/:id",
            element: <SecureRoute><UpdateToys /></SecureRoute>
         },

      ]
   },

   //============footer routes
   {
      path: "footer/",
      element: <FooterLayout />,
      children: [
         {
            path: "aboutus",
            element: <AboutUs />
         },
         {
            path: "marketing",
            element: <Marketing />
         },
         {
            path: "contact",
            element: <Contact />
         },
         {
            path: "terms",
            element: <TermsAndConditions />
         },
         {
            path: "policy",
            element: <Policy />
         }
      ]
   }
]);

export default router;