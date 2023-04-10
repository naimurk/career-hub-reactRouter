import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import FeatureDetails from './Component/feature/FeatureDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
     {
      path : "feature/:featureId",
      element: <FeatureDetails></FeatureDetails>
     }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
