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
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },


    {
      path:'*',
      element:<NotFoundPage></NotFoundPage>
    }
  ]);