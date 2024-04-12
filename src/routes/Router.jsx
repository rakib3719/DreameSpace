
import { createBrowserRouter } from "react-router-dom";

import Root from "../root/Root";
import Home from "../pages/home/Home";
import Details from "../component/details/Details";
import Error from "../component/error/Error";
import Login from "../component/login/Login";
import Registar from "../component/registar/Registar";
import PrivateRoute from "../privateRoute/PrivateRoute";
import UpdateProfile from "../component/updateProfile/UpdateProfile";
import AboutUs from "../pages/aboutUs/AboutUs";




const router = createBrowserRouter([

{

    path:'/',
    element: <Root></Root>,
    errorElement: <Error></Error>,

    children: [

        {

            path:'/',
            element: <Home></Home>
        },
        {
            path: '/update_profile',
            element: <PrivateRoute>
                <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        },
        {

            path: '/details/:id',
            loader: () =>   fetch('/data.json'),
            element:<PrivateRoute>

<Details></Details>
            </PrivateRoute>
            
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/registar',
            element:<Registar></Registar>
        },
        {
            path:'/about',
            element: <PrivateRoute>
<AboutUs></AboutUs>

            </PrivateRoute>
        }
    ]
}

])

export default router