
import { createBrowserRouter } from "react-router-dom";

import Root from "../root/Root";
import Home from "../pages/home/Home";




const router = createBrowserRouter([

{

    path:'/',
    element: <Root></Root>,

    children: [

        {

            path:'/',
            element: <Home></Home>
        },
        {
            path: '/update_profile',
            element: <p>this is profile</p>
        },
        {

            path: '/details/:id',
            loader: () => {fetch('data.json')},
            element: <p>This is details page</p>
            
        }
    ]
}

])

export default router