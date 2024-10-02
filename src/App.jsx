import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hi</h1>,
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
  // https://github.com/lacreameo83/Jus-solar.git
}

export default App;
