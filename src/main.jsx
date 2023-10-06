import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import rout from './Routs/Routs.jsx'
import Authprovaider from './Authprovaider/Authprovaider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovaider>
      <RouterProvider router={rout}></RouterProvider>
    </Authprovaider>
  </React.StrictMode>,
)
