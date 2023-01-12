import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getEmployeeById, saveEmployee, updateEmployee } from "../api/employee";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AddEmployee = () => {
  //
  const [employeeState, setEmployeeState] = useState({ initialState });
  const [showAlert, setShowAlert] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  let query = useQuery();
  //
  const handelChange = (e) => {
    setEmployeeState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  //
  const handelSave = async (e) => {
    e.preventDefault();
    if (
      employeeState.firstName?.length >= 3 &&
      employeeState.lastName?.length >= 4 &&
      employeeState.email?.match(validRegex)
    ) {
      //
      if (!isEdit) {
        const response = await saveEmployee(employeeState);
        if (response.status === 200) {
          window.location.replace("/");
        } else {
          console.log(".....................");
        }
      } else {
        //const data
        const data = updateEmployee(employeeState, query.get("id"));
        if (data != null) {
          window.location.replace("/");
        }
      }
    } else {
      setShowAlert(true);

      //
      setInterval(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (query.get("edit") === "true") {
        setIsEdit(true);
        if (query.get("id") != null) {
          const employeeToEdit = await getEmployeeById(query.get("id"));
          setEmployeeState(employeeToEdit);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className=" my-24 mx-auto shadow-md max-w-2xl">
        {showAlert && (
          <div
            className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 flex justify-between items-center"
            role="alert"
          >
            <div>
              <p className="font-bold">Be Warned</p>
              <p>make sure all input fileds are field correctly</p>
            </div>
            <div>
              <button className="rounded-lg bg-red-400 px-3 py-1 shadow-lg text-white font-thin hover:bg-red-500">
                close
              </button>
            </div>
          </div>
        )}
        <div className="relative flex">
          <p className="p-4 text-lg font-thin tracking-wider">
            {!isEdit ? "Add an employee" : "Edit an employee"}
          </p>
          <div className="my-5">
            <form action="#" className="mx-5" onSubmit={(e) => handelSave(e)}>
              <div>
                <label htmlFor="firstName" className="block text-gray-400">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={employeeState?.firstName}
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
                  value={employeeState?.lastName}
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
                  value={employeeState?.email}
                  className="mt-2 p-2 border text-sm font-normal  h-9 w-96 outline-gray-400"
                  onChange={(e) => handelChange(e)}
                />
              </div>
              <div className="mt-3 font-semibold text-sm tracking-wider text-white">
                <button className="rounded-lg bg-violet-600 px-5 py-2 shadow-lg hover:bg-violet-400">
                  {!isEdit ? "save " : "update "}
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
        </div>
      </section>
    </>
  );
};

export default AddEmployee;
