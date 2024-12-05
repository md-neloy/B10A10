import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../component/Navbar/Navbar";

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
