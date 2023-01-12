import axios from "axios";

const API_URL_AUTH = "http://localhost:8080/api/v1/auth/";

const login = async (username, password) => {
  //make api call
  const response = await axios.post(API_URL_AUTH + "login", {
    username: username,
    password: password,
  });

  if (response.data.token) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response;
};

const register = async (firstName, lastName, username, password) => {
  //make api call
  const response = await axios.post(API_URL_AUTH + "register", {
    firstNmae: firstName,
    lastName: lastName,
    username: username,
    password: password,
  });

  if (response.data.token) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response;
};

export { register, login };
