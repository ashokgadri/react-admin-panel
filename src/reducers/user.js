import { userConstants } from "../constants";

const initialState = {
    users: null
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USERS_REQUEST:
      return {
        users: action.users,
      };
    default:
      return state;
  }
};
