import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider , createBrowserRouter} from 'react-router-dom'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path : '/',
    element : <h1>Home</h1>
  }
])

root.render(<RouterProvider router={router}/>)