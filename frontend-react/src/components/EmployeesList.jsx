import React from "react";

const EmployeesList = () => {
  return (
    <div className="mt-6 mx-auto" style={{ maxWidth: "70%" }}>
      <p>employee list</p>
      <div>
        <table className="min-w-full">
          <thead className="text-left bg-gray-400 text-gray-800">
            <td className="font-semibold text-sm text-left py-2 border uppercase tracking-wider pl-1  border-gray-200">
              id
            </td>
            <td className="font-semibold text-sm text-left py-2 border uppercase tracking-wider pl-1  border-gray-200">
              first name
            </td>
            <td className="font-semibold text-sm text-left py-2 border uppercase tracking-wider pl-1  border-gray-200">
              last name
            </td>
            <td className="font-semibold text-sm text-left py-2 border uppercase tracking-wider pl-1  border-gray-200">
              email
            </td>
          </thead>
          <tbody>
            <tr>
              <td className="font-thin text-sm text-left py-2 border border-gray-200 tracking-wider">
                1
              </td>
              <td className="font-thin text-sm text-left py-2 border border-gray-200 tracking-wider">
                my name
              </td>
              <td className="font-thin text-sm text-left py-2 border border-gray-200 tracking-wider">
                my ls name
              </td>
              <td className="font-thin text-sm text-left py-2 border border-gray-200 tracking-wider">
                lrfjfj@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesList;
