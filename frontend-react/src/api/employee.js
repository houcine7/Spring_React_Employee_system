import axios from "axios";
import { AuthorizationHeader } from "./Requests.extras";

const API_URL = "http://localhost:8080/api/v1/employees/";

const saveEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee, {
      headers: AuthorizationHeader(),
    });
    return response;
  } catch (err) {
    //
    return { status: 403, message: "erro while creating employee" };
  }
};

const getAllEmployees = async () => {
  //
  try {
    const response = await axios.get(API_URL, {
      headers: AuthorizationHeader(),
    });
    return response;
  } catch (e) {
    console.log("can't fetch with this token");
    return { status: 403 };
  }
};

const deleteEmployee = async (id) => {
  //
  try {
    const response = await axios.delete(API_URL + id, {
      headers: AuthorizationHeader(),
    });
    const data = response.data;
    console.log(data);
    return data;
  } catch (e) {
    //
  }
};

const updateEmployee = async (employee, id) => {
  //
  try {
    const response = await axios.put(API_URL + id, employee, {
      headers: AuthorizationHeader(),
    });
    console.log(response);
    return response;
  } catch (e) {
    //
  }
};

const getEmployeeById = async (id) => {
  //
  try {
    const response = await axios.get(API_URL + id, {
      headers: AuthorizationHeader(),
    });
    return response.data;
  } catch (error) {
    //handel error
  }
};

export {
  saveEmployee,
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
};
