import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { allUsers } from "../actions/userActions";

export default function MainScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>LogoForm</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/login">
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1>Content only for users!</h1>
      </Container>
    </>
  );
}
