import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import register from "./register.json";
import { Context } from "../../ContexApi/ContextProvider";
const Register = () => {
  const { createUser, updateProfiles, setuser, googleLogin } =
    useContext(Context);
  const [togol, setTogol] = useState(false);
  const navigate = useNavigate();
  const successNofity = () => {
    toast.success("Successfully Create Account!", {
      position: "top-center",
    });
  };
  const errorNofity = (text = "Error Notification") => {
    toast.error(text, {
      position: "top-left",
    });
  };
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (password.length < 6) {
      errorNofity("password should be minimum 6 character");
      return;
    }
    if (!passwordRegex.test(password)) {
      errorNofity("at least one uppercase, lowercase, digit and symbol");
      return;
    }
    createUser(email, password)
      .then((result) => {
        setuser(result.user);
        updateProfiles({
          displayName: formData.name,
          photoURL: formData.photoUrl,
        })
          .then(() => {
            successNofity();
            navigate("/");
            setFormData({
              name: "",
              photoUrl: "",
              email: "",
              password: "",
            });
            setuser((prev) => ({
              ...prev,
              displayName: formData.name,
              photoURL: formData.photoUrl,
            }));
          })
          .catch((error) => errorNofity(error.message));
      })
      .catch((error) => {
        console.log(error);
        errorNofity(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
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
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create an Account
        </h2>
        <Lottie animationData={register} className="w-36 mx-auto" />
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              id="photoUrl"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your photo URL"
            />
          </div>
          {/* email */}
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
              className="absolute top-[60%] right-4"
              onClick={() => setTogol(!togol)}
            >
              {togol ? <FaEye /> : <PiEyeClosedFill />}
            </span>
          </div>
          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
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
          Allready have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
