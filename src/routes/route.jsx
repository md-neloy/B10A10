import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "./ErrorPage/ErrorPage";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Campaign from "../component/Campaign/Campaign";
import NewCampaign from "../component/NewCampaign/NewCampaign";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/campaign",
        element: <Campaign />,
      },
      {
        path: "/newCampaign",
        element: <NewCampaign />,
      },
    ],
  },
]);
