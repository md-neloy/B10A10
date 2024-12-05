import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
