import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default function RegisterScreen() {
  return (
    <main className="main">
      <Container className="formContainer mt-5">
        <Form className="px-3">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
