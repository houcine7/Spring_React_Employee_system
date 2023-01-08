import React from "react";

const EditEmpoyee = () => {
  const handelChange = () => {
    //
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstName" className="block text-gray-400">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="first name here"
            className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
            onChange={(e) => handelChange(e)}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-gray-400">
            last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="last name here"
            className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
            onChange={(e) => handelChange(e)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-400">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email here"
            className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
            onChange={(e) => handelChange(e)}
          />
        </div>
        <div className="mt-3 font-semibold text-sm tracking-wider text-white">
          <button className="rounded-lg bg-violet-600 px-5 py-2 shadow-lg hover:bg-violet-400">
            save{" "}
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
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmpoyee;
