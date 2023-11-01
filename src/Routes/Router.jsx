import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Login from '../components/Login/Login'
import Register from "../components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/login',
       element:<Login></Login>
      },
      {
        path: '/register',
       element:<Register></Register>
      },
    ]
  },
]);

