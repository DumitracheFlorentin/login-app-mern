import { useRef, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { UserIsLogged } from "../actions/userActions";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const userLogged = useSelector((state) => state.isLogged);
  const { isLogged } = userLogged;

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(
      UserIsLogged(usernameRef.current.value, passwordRef.current.value)
    );
  };

  useEffect(() => {
    if (isLogged && isLogged.username) {
      localStorage.setItem("loginForm-user-login", JSON.stringify(userLogged));
      history.push("/");
    }
    if (localStorage.getItem("loginForm-user-login")) {
      history.push("/");
    }
  }, [dispatch, isLogged, history, userLogged]);

  return (
    <main className="main">
      <Container className="formContainer mt-5">
        <Form className="px-3" onSubmit={loginHandler}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              ref={usernameRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="my-3">
            Log In
          </Button>

          <Form.Group className="mb-3 mt-2">
            <p>
              Don't you have an account? <Link to="/register">Register</Link>
            </p>
            <LinkContainer to="/">
              <p className="button">Back to Main Page</p>
            </LinkContainer>
          </Form.Group>
        </Form>
      </Container>
    </main>
  );
}
