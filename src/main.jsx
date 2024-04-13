import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AuthContext from './context/AuthContext'

import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthContext>



  
<HelmetProvider>
  <RouterProvider router={router} ></RouterProvider>
</HelmetProvider>


</AuthContext>
  </React.StrictMode>,
)
