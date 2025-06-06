import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Login = () => {

    const {logInUser} = use(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // login user
        logInUser(email, password)
        .then(result =>{
          console.log(result);
          
        })
        .catch(error =>{
          console.log(error);
          
        })



    }

    return (
         <div className="flex justify-center mt-10">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>

        <div className="my-6 space-y-4">
          <button
            // onClick={handleGoogleSignIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 text-blue-700 dark:border-blue-600 focus:dark:ring-violet-600"
          >
            <img
              className="w-7"
              src="https://i.ibb.co.com/4gwGPTyj/icons8-google-50.png"
              alt=""
            />
            <p>Login with Google</p>
          </button>
          <button
            aria-label="Login with GitHub"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <img
              className="w-7"
              src="https://i.ibb.co.com/PvJMHfG1/icons8-github-50.png"
              alt=""
            />
            <p>Login with GitHub</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form
          onSubmit={handleLogin}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              {/* email */}
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
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              {/* password */}
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder=""
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div>
              <Link
                to="/forgotpassword"
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 text-gray-50 hover:bg-orange-500 cursor-pointer"
          >
            Sign in
          </button>
          {/* {error && <p className="text-red-500 text-xs text-center">{error}</p>} */}
          <p className="text-sm text-center dark:text-gray-600">
            Dont have account?
            <Link
              to="/register"
              className="focus:underline text-red-500 font-bold hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
    );
};

export default Login;