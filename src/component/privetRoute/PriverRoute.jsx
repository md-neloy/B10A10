import { useContext } from "react";
import { Context } from "../../ContexApi/ContextProvider";
import LoadingPage from "../LoadingPage/LoadingPage";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PriverRoute = ({ children }) => {
  const { user, loading } = useContext(Context);
  if (loading) {
    return <LoadingPage />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PriverRoute;

PriverRoute.propTypes = {
  children: PropTypes.element,
};
