import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/SignUp/Signup.jsx'
import { Toaster } from 'react-hot-toast';


const route= createBrowserRouter([
  {
    path:'/',
  element:<Layout/>,
  children:[
     {path:"",
      element:<App/>},
      {path:"login",
        element:<Login/>},
        {path:"signup",
          element:<SignUp/>},
      
  ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
    {/* <App /> */}
    <Toaster/>
  </React.StrictMode>,
)
