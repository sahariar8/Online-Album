import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import Error from './components/Error.jsx'
import ContextProvider from './provider/ContextProvider.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import AddImage from './pages/add-Image/AddImage.jsx'
import AllImage from './pages/all-image/AllImage.jsx'
import PrivateRoutes from './routes/privateRoute/PrivateRoutes.jsx'

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
        path:'add-image',
        element:<PrivateRoutes><AddImage></AddImage></PrivateRoutes>
      },
      {
        path:'all-image',
        element:<PrivateRoutes><AllImage></AllImage></PrivateRoutes>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
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
