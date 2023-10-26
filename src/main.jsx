import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';
import Root from './Pages/Components/Root/Root'; 
import SignUp from './Pages/Components/Root/Sign up/SignUp';
import AuthProvider from './Pages/Components/AuthProvider/AuthProvider';
import Login from './Pages/Components/Root/Sign in/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : '/signup',
        element : <SignUp></SignUp>      
      },
      {
        path :'/login',
        element : <Login></Login>

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
