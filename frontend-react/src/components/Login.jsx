import React from "react";

const Login = () => {
  return (
    <div className=" mx-auto shadow-xl shadow-gray-200 max-w-2xl p-6 mt-10 relative overflow-hidden">
      <div className="mt-3 ">
        <h3 className="font-bold text-lg tracking-wider">Welcome back !</h3>
        <p className="text-lg font-thin text-gray-600">
          please enter your information to login
        </p>
      </div>
      <span className="absolute right-0 left-1/3 opacity-60 -z-10 ">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            d="M41.6,-50.3C49.9,-42.5,50,-25.7,53.9,-8.7C57.8,8.2,65.5,25.2,60.4,35.6C55.2,45.9,37.3,49.6,19.9,56.8C2.5,64,-14.3,74.8,-30.5,73.4C-46.7,72,-62.3,58.5,-72.6,41.5C-82.9,24.5,-87.8,4.1,-81.1,-10.9C-74.3,-25.8,-55.9,-35.3,-40.5,-41.8C-25,-48.4,-12.5,-52.1,2,-54.5C16.6,-56.9,33.2,-58.2,41.6,-50.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
      <form>
        <div className="mt-2">
          <label htmlFor="firstName" className="block text-gray-600">
            username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="firstName" className="block text-gray-600">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
          />
        </div>
      </form>
      <div className="mt-5">
        <button className="text-sm font-semibold rounded-lg py-2 px-3 bg-pink-400 hover:bg-pink-500 transition ease-in-out duration-200">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
