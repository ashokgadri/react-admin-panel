import { urlConstants } from "../constants";
import { axios } from "../utils";

export const authService = {
  login,
  logout,
};

function login(username, password) {
  return axios
    .post(urlConstants.LOGIN, {
      email: username,
      password,
    })
    .then(response => {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    });
}

function logout() {
  localStorage.removeItem("user");
}
