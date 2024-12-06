import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import login from "./login.json";
import { Context } from "../../ContexApi/ContextProvider";
import Lottie from "lottie-react";

const Login = () => {
  const [togol, setTogol] = useState(false);
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const { formData, setFormData, googleLogin, loginUser } = useContext(Context);

  const successNofity = () => {
    toast.success("Successfully Login!", {
      position: "top-center",
    });
  };
  const errorNofity = (error = "password or email is not vaild") => {
    toast.error(error, {
      position: "top-left",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData.email, formData.password)
      .then((result) => {
        console.log(result.user);
        successNofity;
        setFormData({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        errorNofity(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        if (location.state) {
          // console.log(location.state);
          navigate(location.state);
        } else {
          navigate("/");
        }
        successNofity();
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        errorNofity();
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <Lottie animationData={login} className="w-36 mx-auto" />
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mt-4 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={togol ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute top-[60%] right-4 cursor-pointer"
              onClick={() => setTogol(!togol)}
            >
              {togol ? <FaEye /> : <PiEyeClosedFill />}
            </span>
          </div>
          <div className="text-right mt-2">
            <Link
              to="/forgetPass"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
