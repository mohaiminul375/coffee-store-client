import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Root from "./layout/Root";
import AddCoffee from "./components/Pages/AddCoffee";


const router= createBrowserRouter([
  {
   path:'/',
   element:<Root></Root>,
   children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/addCoffee',
      element:<AddCoffee></AddCoffee>
    }
   ]
  }
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
