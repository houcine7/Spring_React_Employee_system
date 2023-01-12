import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEmployees } from "../api/employee";
import AlertPermession from "./AlertPermession";

import EmployeeRow from "./EmployeeRow";

const EmployeesList = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [idEmployee, setIdEmployee] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/login");
    } else {
      async function fetchData() {
        //
        const data = await getAllEmployees();

        if (data.status === 200) {
          setEmployeesData(data.data);
        } else {
          navigate("/login");
        }
      }
      fetchData();
    }
  }, []);

  return (
    <div className="mt-10 mx-auto" style={{ maxWidth: "70%" }}>
      <div className="grid grid-cols-2 items-center">
        <div>
          <p className="pb-1 mb-5 font-thin text-gray-900 tracking-wider">
            Employee list
            <span className="border-b-4 border-violet-400 block w-10"></span>
          </p>
        </div>
        <div className="flex items-center mb-5 gap-5">
          <input
            type="text"
            className="p-2 border text-sm font-normal  h-9 w-full outline-gray-400 "
            placeholder="search"
          />

          <button className="bg-violet-300 rounded-lg px-3 py-2 font-semibold text-sm transition duration-500 hover:bg-violet-600 ease-in-out hover:text-white">
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="realtive">
          {showAlert && (
            <AlertPermession setShowAlert={setShowAlert} id={idEmployee} />
          )}
          <table className="min-w-full relative">
            <thead className="text-left bg-gray-100 text-gray-600">
              <tr className="border shadow-sm">
                <td className="font-semibold text-sm text-left py-3 uppercase tracking-wider px-2  ">
                  id
                </td>
                <td className="font-semibold text-sm text-left py-3 uppercase tracking-wider pl-1 px-2">
                  first name
                </td>
                <td className="font-semibold text-sm text-left py-3 uppercase tracking-wider pl-1 px-2">
                  last name
                </td>
                <td className="font-semibold text-sm text-left py-3 uppercase tracking-wider pl-1 px-2 ">
                  email
                </td>
                <td className="font-semibold text-sm text-left py-3 uppercase tracking-wider pl-1 px-2 ">
                  actions
                </td>
              </tr>
            </thead>
            <tbody>
              {employeesData?.map((employee, index) => {
                return (
                  <EmployeeRow
                    employee={employee}
                    index={index}
                    setShowAlert={setShowAlert}
                    key={index}
                    setEmployeeId={setIdEmployee}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;
