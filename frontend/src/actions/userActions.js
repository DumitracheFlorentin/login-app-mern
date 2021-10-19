import axios from "axios";
import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
} from "../constants/userConstants";

export const allUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });

    const { data } = await axios.get("/api/users");

    dispatch({ type: ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
