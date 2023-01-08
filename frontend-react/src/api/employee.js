import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/employees";

const saveEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  const data = response.data;
  console.log(data);
  return data;
};

const getAllEmployees = async () => {
  //
  const response = await axios.get(API_URL);
  const data = await response.data;
  return data;
};

const deleteEmployee = async (id) => {
  //
  const response = await axios.delete(API_URL + "/" + id);
  const data = response.data;
  console.log(data);
  return data;
};

const updateEmployee = async (employee, id) => {
  //
  const response = await axios.put(API_URL + "/" + id, employee);
  console.log(response);
  return response;
};

const getEmployeeById = async (id) => {
  //
  const response = await axios.get(API_URL + "/" + id);
  return response.data;
};

export {
  saveEmployee,
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
};
