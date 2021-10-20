import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Reducers
import { allUsersReducer, loginUserReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  users: allUsersReducer,
  isLogged: loginUserReducer,
});

const initialState = {
  isLogged: localStorage.getItem("loginForm-user-login")
    ? JSON.parse(localStorage.getItem("loginForm-user-login"))
    : {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
