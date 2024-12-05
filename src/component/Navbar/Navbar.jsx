import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { Context } from "../../ContexApi/ContextProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, logout } = useContext(Context);
  const currentLocation = useLocation();
  console.log(currentLocation.pathname);
  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "!text-black !bg-[#00FFFF] font-bold hover:bg-[#00FFFF] "
              : ` font-bold  hover:bg-[#00FFFF] hover:text-black ${
                  currentLocation.pathname === "/"
                    ? "bg-transparent text-white"
                    : "bg-cyan-500 text-black"
                }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "!text-black !bg-[#00FFFF] font-bold hover:bg-[#00FFFF] "
              : ` font-bold  hover:bg-[#00FFFF] hover:text-black ${
                  currentLocation.pathname === "/"
                    ? "bg-transparent text-white"
                    : "bg-cyan-500 text-black"
                }`
          }
          to="/Allcampaign"
        >
          All Campaign
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!text-black !bg-[#00FFFF] font-bold hover:bg-[#00FFFF] "
                : ` font-bold  hover:bg-[#00FFFF] hover:text-black ${
                    currentLocation.pathname === "/"
                      ? "bg-transparent text-white"
                      : "bg-cyan-500 text-black"
                  }`
            }
            to="/newCampaign"
          >
            Add New Campaign
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!text-black !bg-[#00FFFF] font-bold hover:bg-[#00FFFF] "
                : ` font-bold  hover:bg-[#00FFFF] hover:text-black ${
                    currentLocation.pathname === "/"
                      ? "bg-transparent text-white"
                      : "bg-cyan-500 text-black"
                  }`
            }
            to="/mycampaign"
          >
            My Campaign
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!text-black !bg-[#00FFFF] font-bold hover:bg-[#00FFFF] "
                : ` font-bold  hover:bg-[#00FFFF] hover:text-black ${
                    currentLocation.pathname === "/"
                      ? "bg-transparent text-white"
                      : "bg-cyan-500 text-black"
                  }`
            }
            to="/mydonation"
          >
            My Donations
          </NavLink>
        </li>
      )}
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "!text-black !bg-[#00FFFF] font-bold hover:bg-[#00FFFF]  "
              : ` font-bold  hover:bg-[#00FFFF] hover:text-black ${
                  currentLocation.pathname === "/"
                    ? "bg-transparent text-white"
                    : "bg-cyan-500 text-black"
                }`
          }
          to="/help"
        >
          How to Help
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <Tooltip id="my-tooltip" className="z-40" />
      <div
        className={`navbar bg-transparent flex flex-col justify-start items-start md:items-center sm:flex-row md:justify-normal z-40 px-4 lg:px-[100px] `}
        style={{
          position: currentLocation.pathname === "/" ? "absolute" : "static",
        }}
      >
        <div className="navbar-start justify-between md:justify-normal ">
          <div className="dropdown z-20">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost lg:hidden ${
                currentLocation.pathname === "/" ? "text-white" : "text-black"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div>
            <Link
              to="/"
              className={`text-2xl md:text-4xl font-bold ${
                currentLocation.pathname === "/" ? "text-white" : "text-black"
              }`}
            >
              DreamCrowd
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{link}</ul>
        </div>
        <div className="navbar-start sm:navbar-end gap-2 md:gap-4">
          <div>
            {user && user?.photoURL ? (
              <div
                className={`w-10 h-10 bg-blue-900 rounded-full overflow-hidden`}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`${user.displayName}`}
              >
                <img src={user?.photoURL} alt="" />{" "}
              </div>
            ) : (
              <FaUserAlt />
            )}
          </div>
          <div className="flex gap-3">
            {user && user?.email ? (
              <Link className="btn btn-sm" onClick={logout}>
                LogOut
              </Link>
            ) : (
              <>
                <Link className="btn btn-sm" to="/login">
                  Login
                </Link>
                <Link className="btn btn-sm" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
