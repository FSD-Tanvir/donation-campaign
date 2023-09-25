import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.Jsx";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
