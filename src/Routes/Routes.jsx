import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Instructors from "../Pages/Instructors";
import Classes from "../Pages/Classes";
import NotFoundPage from "../Pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret";
import RecordedClass from "../Pages/RecordedClass";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import ManageClass from "../Components/ManageClass/ManageClass";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'registration',
          element:<Registration></Registration>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'class',
          element:<Classes></Classes>
        },



        {
          path:'recordClass',
          element:<RecordedClass></RecordedClass>
        },

        
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }

        
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<MySelectedClass></MySelectedClass>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'manageClass',
          element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path:'addClass',
          element:<AddClass></AddClass>
        }
      ]
    },


    {
      path:'*',
      element:<NotFoundPage></NotFoundPage>
    }
  ]);