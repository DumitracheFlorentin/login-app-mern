// Import Screens
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";

// Import Router
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainScreen />
      </Route>

      <Route path="/login" exact>
        <LoginScreen />
      </Route>

      <Route path="/register" exact>
        <RegisterScreen />
      </Route>
    </Switch>
  );
}
