import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
import ViewDetails from "../pages/ViewDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch(`../../public/donationCampaign.json`),
      },
      {
        path:"/details/:id",
        element:<ViewDetails/>,
        loader: () => fetch(`../../public/donationCampaign.json`),
      },
      {
        path: "/donation/",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default routes;
