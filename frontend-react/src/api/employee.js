import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/employees";

const saveEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  const data = response.data;
  console.log(data);
  return data;
};

export default saveEmployee;
