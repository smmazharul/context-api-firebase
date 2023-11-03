import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Login from '../components/Login/Login'
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import Orders from "../components/Orders/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
       element:<Home></Home>
      },
      {
        path: '/login',
       element:<Login></Login>
      },
      {
        path: '/register',
       element:<Register></Register>
      },
      {
        path: '/orders',
        element:<ProtectedRoutes> <Orders></Orders></ProtectedRoutes>
      }
    ]
  },


]);

