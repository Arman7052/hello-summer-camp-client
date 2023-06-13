import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Error from "../Error";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login&SignUp/Login";
import SignUp from "../Pages/Login&SignUp/SignUp";
import DashBoard from "../Layouts/DashBoard";
import PrivateRoute from "../Routes/PrivateRoute";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import Classes from "../Pages/Classes/Classes";



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
        },
        {
          path:'classes',
          element: <Classes></Classes>
        },
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
    {
      path: 'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"selectedClasses",
          element: <SelectedClasses></SelectedClasses>
        },
        {
          path:'enrolledClasses',
          element:<EnrolledClasses></EnrolledClasses>
        }
      ]
    },
  ]);