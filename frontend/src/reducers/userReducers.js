import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_LOGOUT,
} from "../constants/userConstants";

export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return { loading: true, users: [] };

    case ALL_USERS_SUCCESS:
      return { loading: false, users: action.payload };

    case ALL_USERS_FAIL:
      return { loading: false, users: action.payload };

    default:
      return state;
  }
};

export const loginUserReducer = (state = { isLogged: {} }, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { loading: true, isLogged: {} };

    case LOGIN_USER_SUCCESS:
      return { loading: false, isLogged: action.payload };

    case LOGIN_USER_FAIL:
      return { loading: false, isLogged: action.payload };

    case LOGIN_USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
