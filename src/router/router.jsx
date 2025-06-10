import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import MyFoodRequest from "../pages/MyFoodRequest.jsx/MyFoodRequest";
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import UpdatedFood from "../pages/UpdatedFood/UpdatedFood";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <div>loadinnggg...</div> ,
        loader:()=> fetch('http://localhost:3000/featureFoods'),
        Component: Home,
      },
      {
        path:'addFood',
        element:<AddFood></AddFood>
      },
      {
        path:'availableFoods',
        element:<AvailableFoods></AvailableFoods>
      },
      {
        path:'availableFoods/:id',
        hydrateFallbackElement: <div>loadinnggg...</div> ,
        loader: ({params}) => fetch(`http://localhost:3000/availableFoods/${params.id}`),
        element: <FoodDetails></FoodDetails>
      },
      {
        path:'foodRequest',
        element:<MyFoodRequest></MyFoodRequest>
      },
      {
        path:'manageMyFoods',
        element:<ManageMyFoods></ManageMyFoods>
      },
      {
        path:'updatedFood/:id',
        loader: ({params}) => fetch(`http://localhost:3000/allFoods/${params.id}`),
        element:<UpdatedFood></UpdatedFood>
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
