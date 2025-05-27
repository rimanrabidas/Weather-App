import './App.css'
import "./App.css";
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApiProvider } from '../BioContext';
import Forecast from './pages/Forecast';
import MainLayout from './components/MainLayout';



const App = () => {
 


const router = createBrowserRouter([
  {path:"/",
    element:<MainLayout/>,
    children:[
{
  path:"/",
  element:  <Home/>,
},
{
  path:"/forecast",
  element:  <Forecast/>,
},
]
  }
]);

  return  <ApiProvider><RouterProvider router={router}/></ApiProvider> ;
};

export default App;
