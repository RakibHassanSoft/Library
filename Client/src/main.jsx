import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Root/Main.jsx';
import Home from './pages/Home/Home.jsx';
import AddBook from './pages/AddBook/AddBook.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Details from './pages/Details/Details.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AllBookes from './pages/AllBooks/AllBookes.jsx';
import UpdateBook from './pages/UpdateBook/UpdateBook.jsx';
import BorrowedBook from './pages/BorrowedBook/BorrowedBook.jsx';
import FindCategory from './pages/Category/FindCategory.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';


import toast, { Toaster } from 'react-hot-toast';

// import BorrowedBook from './pages/BorrowedBook/BorrowedBook.jsx';
// import AddBook from './pages/AddBook/AddBook.jsx';
// import AllBooks from './pages/AllBooks/AllBookes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/add-book",
        element:<PrivetRoute><AddBook></AddBook></PrivetRoute>

      },{
        path: "/all-book",
        element:<PrivetRoute><AllBookes></AllBookes></PrivetRoute>,
        loader:()=>fetch('http://localhost:5000/books')


      },{
        path: "/borrowed-book",
        element:<PrivetRoute><BorrowedBook></BorrowedBook></PrivetRoute>
        
      },{
        path: "/login",
        element:<Login></Login>
        
      }
      ,{
        path: "/register",
        element:<Register></Register>
        
      }
      ,{
        path: "/details/:id",
        element:<Details></Details>,
        loader:()=>fetch('http://localhost:5000/books')  
        
        
        
      },{
        path: '/update/:id',
        element:<PrivetRoute><UpdateBook></UpdateBook></PrivetRoute>,
        loader:()=>fetch('http://localhost:5000/books')        
      },{
        path:"/category/:category",
        element:<FindCategory></FindCategory>,
        loader:()=>fetch('http://localhost:5000/books')    
      }
      ,{
        path:"/category/dfdsg",
        element:<PrivetRoute></PrivetRoute>
  
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
