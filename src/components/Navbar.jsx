import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center py-5 font-bold text-lg text-[#0B0B0B] mx-2 gap-4 bg-[#FFFFFFF2] sm:flex-row ">
        <div>
          <img
            src="https://i.ibb.co/dp6hLxZ/Logo.png"
            alt=""
            className="bg-white"
          />
        </div>
        <nav>
          <ul className="flex gap-6 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `${
                        location.pathname === "/"
                          ? " text-[#FF444A] underline"
                          : ""
                      }`
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
