import './App.css'
import React from "react";
import "./App.css";
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApiProvider } from '../BioContext';
import Forecast from './pages/Forecast';



const App = () => {
 


const router = createBrowserRouter([
{
  path:"/",
  element:  <Home/>,
},
{
  path:"/forecast",
  element:  <Forecast/>,
},
]);

  return  <ApiProvider><RouterProvider router={router}/></ApiProvider> ;
};

export default App;
