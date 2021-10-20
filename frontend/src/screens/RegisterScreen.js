import { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";

export default function RegisterScreen() {
  const history = useHistory();
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const user = useSelector((state) => state.registeredUser);

  const registerHandler = (e) => {
    e.preventDefault();

    dispatch(
      registerUser(
        usernameRef.current.value,
        passwordRef.current.value,
        emailRef.current.value
      )
    );

    console.log(user);

    if (user && user.newUser.username) {
      history.push("/login");
    }
  };

  return (
    <main className="main">
      <Container className="formContainer mt-5">
        <Form className="px-3" onSubmit={registerHandler}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              ref={usernameRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              ref={emailRef}
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
            Register
          </Button>

          <Form.Group className="mb-3 mt-2">
            <p>
              You have an account? <Link to="/login">Log in</Link>
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
