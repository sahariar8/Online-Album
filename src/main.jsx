import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/layout/Layout.jsx'
import Home from './pages/home/Home.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<></>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
