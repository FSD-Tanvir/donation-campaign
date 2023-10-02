import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
import ViewDetails from "../pages/ViewDetails";
import ErrorPage from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/donationCampaign.json'),
      },
      {
        path: "/details/:id",
        element: <ViewDetails />,
        loader: () => fetch('/donationCampaign.json'),
      },
      {
        path: "/donation/",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch('/donationCampaign.json'),
      },
    ],
  },
]);

export default router;
