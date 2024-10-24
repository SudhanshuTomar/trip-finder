import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './components/Body';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import Restaurant from './components/Restaurant';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      {path:'/',element: <Body/>},
      {path: "/about", element: <About />},
      {path:'/contact',element: <Contact/>},
      {path: '/restaurants/:resid',element: <Restaurant/>}, 
  ],
  errorElement: <Error/>,
},
  
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
