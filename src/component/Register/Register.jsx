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
    toast.success("Successfully Created Account!", {
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
      errorNofity("Password should be at least 6 characters long.");
      return;
    }

    if (!passwordRegex.test(password)) {
      errorNofity(
        "Password must include at least one uppercase, one lowercase, one number, and one special character."
      );
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
          })
          .catch((error) => errorNofity(error.message));
      })
      .catch((error) => {
        errorNofity(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        navigate("/");
        successNofity();
      })
      .catch((error) => errorNofity(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-4xl items-center justify-center gap-12 p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg">
        {/* Lottie Animation */}
        <div className="w-full md:w-1/2">
          <Lottie
            animationData={register}
            className="w-full max-w-sm mx-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
            Create an Account
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Join us today! It&apos;s quick and easy.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Grouped Name and Photo URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-indigo-600 font-medium">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-indigo-600 font-medium">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Your photo URL"
                  className="input input-bordered rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
                  value={formData.photoUrl}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-indigo-600 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-gray-500">OR</div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2 text-indigo-600 hover:text-white hover:bg-indigo-600 transition-colors"
          >
            <FcGoogle size={20} />
            Sign Up with Google
          </button>

          {/* Login Redirect */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
