import React from "react";
import {
  Outlet,
  Link,
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/boards",
    // Single route in lazy file
    lazy: () => import("./pages/MyBoards"),
  },
  // {
  //   path: "dashboard",
  //   async lazy() {
  //     // Multiple routes in lazy file
  //     let { DashboardLayout } = await import("./pages/Dashboard");
  //     return { Component: DashboardLayout };
  //   },
  // },
  {
    path: "*",
    element: <Home />,
  },
]);

export default function App() {
  return <div>
    <Navbar/>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
}
