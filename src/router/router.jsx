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
import Loader from "../pages/Loader/Loader";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRouter from "../Provider/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader></Loader>,
        loader: () => fetch("https://food-nest-server.vercel.app/featureFoods"),
        Component: Home,
      },
      {
        path: "addFood",
        element: (
          <PrivateRouter>
            <AddFood></AddFood>
          </PrivateRouter>
        ),
      },
      {
        path: "availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "availableFoods/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(`https://food-nest-server.vercel.app/availableFoods/${params.id}`),
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "foodRequest",
        element: (
          <PrivateRouter>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRouter>
        ),
      },
      {
        path: "manageMyFoods",
        element: (
          <PrivateRouter>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRouter>
        ),
      },
      {
        path: "updatedFood/:id",
        loader: ({ params }) =>
          fetch(`https://food-nest-server.vercel.app/allFoods/${params.id}`),
        element: <UpdatedFood></UpdatedFood>,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

export default router;
