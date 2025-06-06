import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddFood from "../pages/AddFood/AddFood";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'addFood',
        element:<AddFood></AddFood>
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'login',
        Component:Login
      }
    ],
  },
]);

export default router;
