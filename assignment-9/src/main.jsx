import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Component/Home";
import ErrorPage from "./Component/ErrorPage";
import Statistics from "./Statistics";
import AppliedJob from "./AppliedJob";
import Blog from "./Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('JobCatagory.json')
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>
      },
      {
        path: '/applied-jobs',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);