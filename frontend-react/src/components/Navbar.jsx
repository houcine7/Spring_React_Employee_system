import React, { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="w-full h-14 bg-violet-400 grid grid-cols-4 items-center text-gray-700">
      <div className="col-span-1">
        <h3 className="font-bold text-xl px-4">Brand</h3>
      </div>

      <ul className="lg:flex lg:justify-start col-span-2">
        <li className="px-4 ">
          <a
            href="#home"
            className="text-gray-800 font-semibold border-b-4 border-violet-700"
          >
            home
          </a>
        </li>
        <li className="px-4">
          <a href="#home" className="hover:border-b-4 hover:border-violet-700">
            about
          </a>
        </li>
        <li className="px-4">
          <a href="#home" className="hover:border-b-4 hover:border-violet-700">
            contact
          </a>
        </li>
      </ul>

      <div className="ml-auto col-span-1 px-4 relative">
        <p
          className="font-bold cursor-pointer"
          onClick={() => setShowDropdown((prevState) => !prevState)}
        >
          username
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </p>

        {showDropdown && (
          <div className="bg-white w-36 absolute top-6 border-2 right-5 shadow-lg font-medium">
            <ul>
              <li className="p-2 hover:bg-gray-400">
                <a href="#login">
                  login{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-6 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="p-2 hover:bg-gray-400">
                <a href="#login">
                  logout{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-6 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
