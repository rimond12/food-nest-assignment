import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    if (!/[A-Z]/.test(password)) {
      return setError("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must include at least one lowercase letter.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    } else {
      setError("");
    }

    // create user

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`${user.email} Succesfully Account Created`);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            toast.error(error);
            setUser(user);
          });
        navigate(`${location.state ? location.state : "/"}`);
        form.reset(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Register to your account
        </h2>

        {/* name */}
        <form
          onSubmit={handleRegister}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                autoComplete="username"
                placeholder=""
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>

            {/* photo */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your Photo URL
              </label>
              <input
                type="text"
                name="photo"
                autoComplete="username"
                placeholder=""
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            {/* email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                autoComplete="username"
                placeholder=""
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            {/* password */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder=""
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            {/* {error && <p className="text-red-500 text-xs">{error}</p>} */}
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3  rounded-full bg-emerald-600 text-gray-50 hover:bg-orange-300 hover:text-emerald-800 font-semibold   dark:text-gray-50"
          >
            Register
          </button>
          <p className="text-sm text-center dark:text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="focus:underline text-red-500 font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
