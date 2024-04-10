
import { createBrowserRouter } from "react-router-dom";

import Root from "../root/Root";
import Home from "../pages/home/Home";
import Details from "../component/details/Details";
import Error from "../component/error/Error";
import Login from "../component/login/Login";




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
            path: '/update_profiles',
            element: <p>this is profile</p>
        },
        {

            path: '/details/:id',
            loader: () =>   fetch('/data.json'),
            element:<Details></Details>
            
        },
        {
            path:'/login',
            element: <Login></Login>
        }
    ]
}

])

export default router