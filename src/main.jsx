import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Root from "./layout/Root";
import AddCoffee from "./components/Pages/AddCoffee";
import UpdateCoffee from "./components/Pages/UpdateCoffee";


const router= createBrowserRouter([
  {
   path:'/',
   element:<Root></Root>,
   children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('http://localhost:5000/coffee')
    },
    {
      path:'/addCoffee',
      element:<AddCoffee></AddCoffee>
    },
    {
      path:'/updateCoffee/:id',
      element:<UpdateCoffee></UpdateCoffee>,
      loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
    }
   ]
  }
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
