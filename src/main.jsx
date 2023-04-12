import React, { useContext } from 'react'
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
import Appliedjob from './Component/Applied_job/Appliedjob';
import { loaderdata } from './utilities';
import Assignment from './Component/AssignmentChart/Assignment';
import { featureLoader } from './featureLoader';
import Error from './Component/error/Error';
import Blog from './Component/blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    errorElement: <Error></Error>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
     {
      path : "feature/:featureId",
      element: <FeatureDetails></FeatureDetails>,
      // loader: ()=> fetch('/feature.json')
      // loader: featureLoader
     },
     {
      path : 'applied_job',
      element: <Appliedjob></Appliedjob>,
      loader : loaderdata
      
     },
     {
      path: 'statics',
      element: <Assignment></Assignment>,
      loader : ()=> fetch('/assignment.json')
     },
     {
      path: "blog",
      element: <Blog></Blog>
     }

    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
