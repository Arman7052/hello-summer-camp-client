import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Error from "../Error";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login&SignUp/Login";
import SignUp from "../Pages/Login&SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path:'/',
            element : <Home></Home>,
        },
        {
          path:'instructors',
          element: <Instructors></Instructors>
        }
      ]
    },
    {
      path: 'login',
      element: <Login></Login>,
    },
    {
      path: 'signup',
      element: <SignUp></SignUp>,
    },
  ]);