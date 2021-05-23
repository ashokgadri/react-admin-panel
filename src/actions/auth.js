import { authConstants } from "../constants";
import { history } from "../helpers/history";
import { authService } from "../services";

export const authActions = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request(username));
    authService.login(username, password).then(response => {
        dispatch(success(response.user));
        history.push('/');
    })
    .catch(error => {
        if(error.response){
            dispatch(failure(error.response.data.message || error.response.statusText));
        }
        else{
            dispatch(failure(error))
        }
    });
  };

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  authService.logout();
  return { type: authConstants.LOGOUT };
}
