import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import Error from './components/Error.jsx'
import ContextProvider from './provider/ContextProvider.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Home></Home>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
