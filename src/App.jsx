import React from "react";
import Header from "./Pages/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Details from "./Pages/Details";
import Doctorpage from "./Pages/Doctorpage";

function App() {
  const routers = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },{
          path:'/conatct',
          element:<Contact/>
        },{
          path:'/details',
          element:<Details/>
        },{
          path:'/doctor',
          element:<Doctorpage/>
        }
      ]
    
    }
  ])

  return (
    <div>
    
      <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
