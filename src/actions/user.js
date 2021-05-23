import { userConstants } from "../constants";
import { userService } from "../services";

export const userActions = {
  users,
};

function users() {
  return (dispatch) => {
    dispatch(request());
    userService
      .users()
      .then((response) => {
        dispatch(success(response.users));
      })
      .catch((error) => {
        if (error.response) {
          dispatch(
            failure(error.response.data.message || error.response.statusText)
          );
        } else {
          dispatch(failure(error));
        }
      });
  };

  function request() {
    return { type: userConstants.USERS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.USERS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.USERS_FAILURE, error };
  }
}
