import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.Jsx";

const MainLayout = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
