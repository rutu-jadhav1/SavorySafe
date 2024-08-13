import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider , createBrowserRouter} from 'react-router-dom'

import './index.css';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import Home from './views/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/signup',
    element : <Signup/>
  },
  {
    path : '/login',
    element : <Login/>
  }
])

root.render(<RouterProvider router={router}/>)