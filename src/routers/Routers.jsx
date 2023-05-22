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
         },
         {
            path: '/allToys',
            element: <AllToys />,
            loader: () => fetch('http://localhost:5555/allToys')
         },
         {
            path: "/toy/:id",
            element: <SecureRoute><ViewDetails></ViewDetails></SecureRoute>,
            loader: ({ params }) => fetch(`http://localhost:5555/allToys/${params.id}`)
         },
         {
            path: '/addAToy',
            element: <SecureRoute><AddToy /></SecureRoute>
         },
         {
            path: '/myToys',
            element: <SecureRoute><MyToys /></SecureRoute>
         },
         {
            path: '/updateToys/:id',
            element: <SecureRoute><UpdateToys /></SecureRoute>,
            loader: ({ params }) => fetch(`http://localhost:5555/myToys/${params.id}`)
         }
      ]
   }
]);

export default router;