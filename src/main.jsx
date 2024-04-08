import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AuthContext from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthContext>

  
<RouterProvider router={router} ></RouterProvider>
</AuthContext>
  </React.StrictMode>,
)
