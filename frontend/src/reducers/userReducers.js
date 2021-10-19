import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
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
