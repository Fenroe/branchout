import React from "react";
import { Login } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./layouts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
