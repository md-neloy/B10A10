import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "./ErrorPage/ErrorPage";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import NewCampaign from "../component/NewCampaign/NewCampaign";
import Home from "../component/Home/Home";
import PriverRoute from "../component/privetRoute/PriverRoute";
import AllCampaign from "../component/AllCampaign/AllCampaign";
import DetailsPage from "../component/DetailsPage/DetailsPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/Allcampaign",
        element: <AllCampaign />,
      },
      {
        path: "/detailsPage/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/getcampaign/${params.id}`),
        element: (
          <PriverRoute>
            <DetailsPage />
          </PriverRoute>
        ),
      },
      {
        path: "/newCampaign",
        element: (
          <PriverRoute>
            <NewCampaign />
          </PriverRoute>
        ),
      },
    ],
  },
]);
