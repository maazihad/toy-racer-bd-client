import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/LoginRegister/Login/Login";
import Register from "../pages/LoginRegister/Register/Register";
import Blog from "../pages/Blogs/Blog";

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
            path: '/login',
            element: <Login />
         },
         {
            path: '/register',
            element: <Register />
         },
         {
            path: '/blog',
            element: <Blog />
         }
      ]
   }
]);

export default router;