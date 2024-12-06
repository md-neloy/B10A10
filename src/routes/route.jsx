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
import MyCampaign from "../component/MyCampaign/MyCampaign";
import UpdateCampaign from "../component/UpdateCampaign/UpdateCampaign";
import MyDonation from "../component/MyDonation/MyDonation";

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
        path: "/mydonation",
        element: (
          <PriverRoute>
            <MyDonation />
          </PriverRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-20n6uet60-md-mahmudul-hassans-projects.vercel.app/getcampaign/${params.id}`
          ),
        element: (
          <PriverRoute>
            <UpdateCampaign />
          </PriverRoute>
        ),
      },
      {
        path: "/mycampaign",
        element: (
          <PriverRoute>
            <MyCampaign />
          </PriverRoute>
        ),
      },
      {
        path: "/detailsPage/:id",
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-server-20n6uet60-md-mahmudul-hassans-projects.vercel.app/getcampaign/${params.id}`
          ),
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
