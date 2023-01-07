import React from "react";

const EmployeeRow = ({ employee, index }) => {
  return (
    <>
      <tr key={index} className="border-b border-l border-r shadow-sm">
        <td className="font-thin text-sm text-left py-3 tracking-wider px-2">
          {employee.id}
        </td>
        <td className="font-thin text-sm text-left py-3 tracking-wider px-2">
          {employee.firstName}
        </td>
        <td className="font-thin text-sm text-left py-3  tracking-wider px-2">
          {employee.lastName}
        </td>
        <td className="font-thin text-sm text-left py-3  tracking-wider px-2">
          {employee.email}
        </td>
        <td className="font-thin text-sm text-left py-3  tracking-wider px-2 flex gap-2">
          <button className="bg-red-300 rounded-lg px-3 py-2 font-semibold text-sm transition duration-500 hover:bg-red-500">
            Delete
          </button>
          <button className="bg-green-300 rounded-lg px-3 py-2 font-semibold text-sm transition hover:bg-green-500">
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default EmployeeRow;