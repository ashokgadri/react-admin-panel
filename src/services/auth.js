import { urlConstants } from "../constants";
import { axios } from "../utils";

export const authService = {
  login,
  logout,
};

function login(username, password) {
  return axios
    .post(urlConstants.LOGIN, {
      username,
      password,
    })
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}
