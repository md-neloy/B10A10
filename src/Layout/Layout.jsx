import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
