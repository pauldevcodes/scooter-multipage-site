import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// routes
import App from './App';
import Home from './pages/Home';
import About from './pages/About';

// creating the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: ([
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ])
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
