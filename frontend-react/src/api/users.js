import axios from "axios";
import { AuthorizationHeader } from "./Requests.extras";

const API_URL = "http://localhost:8080/api/v1/users/";

const getCurrentUser = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: AuthorizationHeader(),
    });
    return response;
  } catch (err) {
    //
    return { status: 403, message: "erro while fetching user" };
  }
};

export { getCurrentUser };
