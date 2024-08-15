import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AnimeBrowse from "./AnimeBrowse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/anime",
      element: <AnimeBrowse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
