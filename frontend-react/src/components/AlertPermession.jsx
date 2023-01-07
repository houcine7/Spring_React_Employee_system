import React from "react";

import { deleteEmployee } from "../api/employee";

const AlertPermession = ({ setShowAlert, id }) => {
  const handelAccept = async () => {
    const data = await deleteEmployee(id);
    window.location.reload();
  };

  return (
    <div className="rounded-lg bg-gray-100 max-w-xl z-10  p-4 md:mx-auto absolute left-0 right-0 border-l-8 border-red-600 top-auto bottom-auto">
      <p className="font-bold text-xs text-center capitalize">
        are you sure you want to continue ?
      </p>

      <div className="flex gap-5 text-sm items-center justify-center mt-3 capitalize">
        <button
          className="bg-blue-500 rounded-lg px-3 py-2 font-semibold text-sm transition duration-500 hover:shadow-2xl"
          onClick={() => {
            handelAccept();
          }}
        >
          Yes continue
        </button>
        <button
          className="bg-gray-500 rounded-lg px-3 py-2 font-semibold text-sm transition duration-500 hover:shadow-2xl"
          onClick={() => {
            setShowAlert(false);
          }}
        >
          No get back
        </button>
      </div>
    </div>
  );
};

export default AlertPermession;
