import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import Users from './Components/Users.jsx'
import Update from './Components/Update.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users")
      },
      {
        path:"/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <Layout></Layout>
    </RouterProvider>
  </React.StrictMode>,
)
