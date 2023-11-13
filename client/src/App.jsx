import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./layouts";
import Home from "./routes/Home";
import Feed from "./routes/Feed";
import Login from "./routes/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/feed",
          element: <Feed />
        },
        {
          path: "/login",
          element: <Login />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
