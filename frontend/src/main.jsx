import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/blogs",
        element: <div>Blogs</div>
      },
      {
        path: "/about",
        element: <div>About</div>
      },
      {
        path: "/contact",
        element: <div>Contact</div>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
