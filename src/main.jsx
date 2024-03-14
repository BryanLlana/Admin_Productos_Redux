import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "@fontsource-variable/onest";
import './index.css'
import Home from './pages/Home.jsx';
import RegisterProduct from './pages/RegisterProduct.jsx';
import LayoutProduct from './layout/LayoutProduct.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutProduct />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/nuevo-producto',
        element: <RegisterProduct />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
