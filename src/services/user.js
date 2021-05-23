import { urlConstants } from "../constants";
import { axios } from "../utils";

export const userService = {
  users,
};

function users() {
  return axios.post(urlConstants.USERS, {}).then((response) => {
    return response.data;
  });
}
