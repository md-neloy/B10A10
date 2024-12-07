import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaGoogle } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import { toast } from "react-toastify";
import login from "./login.json";
import { Context } from "../../ContexApi/ContextProvider";
import Lottie from "lottie-react";

const Login = () => {
  const [togol, setTogol] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, setFormData, googleLogin, loginUser } = useContext(Context);

  const successNofity = () => {
    toast.success("Successfully Login!", {
      position: "top-center",
    });
  };

  const errorNofity = (error = "password or email is not valid") => {
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
        successNofity();
        navigate("/");
        setFormData({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        errorNofity();
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
        successNofity();
      })
      .catch((error) => {
        errorNofity(error.message);
      });
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-purple-300 via-blue-300 to-green-300">
      {/* Left Section: Login Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-2xl">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 text-center">
            Login
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Welcome back! Please login to continue.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-700 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-blue-700 font-medium">
                  Password
                </span>
              </label>
              <div className=" relative">
                <input
                  type={togol ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setTogol(!togol)}
                >
                  {togol ? <FaEye size={20} /> : <PiEyeClosedFill size={20} />}
                </span>
              </div>
            </div>
            <div className="text-right">
              <Link
                to="/forgetPass"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600"
            >
              Login
            </button>
          </form>
          <div className="divider text-gray-500">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2 text-blue-600 hover:text-white hover:bg-blue-600 transition-colors"
          >
            <FaGoogle size={20} />
            Login with Google
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      {/* Right Section: Lottie Animation */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <Lottie animationData={login} className="w-2/3 max-w-md" />
      </div>
    </div>
  );
};

export default Login;
