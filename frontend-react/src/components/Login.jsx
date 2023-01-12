import React, { useState } from "react";

import showIcon from "../assets/show-icon.svg";
import hideIcon from "../assets/hide-icon.svg";

import { login, register } from "../api/authentication";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/contextProvider";
import { actionType } from "../context/reducer";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};

const Login = ({ isLogin }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [formState, SetFormState] = useState(initialState);

  //navigation
  const navigateTo = useNavigate();

  //user
  const [{ user }, dispatch] = useStateValue();
  //
  const handelChange = (e) => {
    SetFormState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handelSubmit = async (e) => {
    //
    e.preventDefault();

    if (isLogin) {
      // perfom athentication
      try {
        const response = await login(formState.username, formState.password);
        if (response.status === 200) {
          dispatch({
            type: actionType.SET_USER,
            user: {
              username: response.data.username,
              firstName: response.data.firstName,
              lastName: response.data.lastName,
            },
          });
          navigateTo("/");
        }
      } catch (error) {
        //show alert with error
      }
    } else {
      //perform registration
      const response = await register(
        formState.firstName,
        formState.lastName,
        formState.username,
        formState.password
      );
      if (response.status === 200) {
        console.log("Registered successfully");
        navigateTo("/login");
      }
    }
  };

  return (
    <div
      className={
        isLogin
          ? "mt-32 mx-auto shadow-xl shadow-gray-200 max-w-2xl p-6 relative overflow-hidden"
          : "mt-20  mx-auto shadow-xl shadow-gray-200 max-w-2xl p-6 relative overflow-hidden "
      }
    >
      <div className="mt-3 ">
        <h3 className="font-bold text-lg tracking-wider">
          {isLogin ? "Welcome back !" : "Create your account"}
        </h3>
        <p className="text-lg font-thin text-gray-600">
          please enter your information to {isLogin ? "login" : "register"}
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
      <form action="#" onSubmit={(e) => handelSubmit(e)}>
        <div className="mt-2">
          {!isLogin && (
            <>
              <label htmlFor="firstName" className="block text-gray-600">
                first name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="firstName"
                value={formState.firstName}
                onChange={(e) => handelChange(e)}
                className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
              />
            </>
          )}
          {!isLogin && (
            <>
              <label htmlFor="lastName" className="block text-gray-600">
                last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="lastName"
                value={formState.lastName}
                onChange={(e) => handelChange(e)}
                className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
              />
            </>
          )}
          <label htmlFor="username" className="block text-gray-600">
            username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formState.username}
            onChange={(e) => handelChange(e)}
            className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="passowrd" className="block text-gray-600">
            password
          </label>
          <div className="relative flex w-96">
            <input
              type={isPassword ? "password" : "text"}
              id="password"
              name="password"
              placeholder="password"
              value={formState.password}
              onChange={(e) => handelChange(e)}
              className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
            />
            <img
              src={isPassword ? showIcon : hideIcon}
              alt="show"
              className="absolute w-5 top-4 right-2 text-gray-500 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => {
                setIsPassword((prevState) => {
                  return !prevState;
                });
              }}
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="text-sm font-semibold rounded-lg py-2 px-3 bg-pink-400 hover:bg-pink-500 transition ease-in-out duration-200">
            {isLogin ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
