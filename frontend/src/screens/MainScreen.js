import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { allUsers, logoutUser } from "../actions/userActions";

export default function MainScreen() {
  const dispatch = useDispatch();

  const { loading, error, users } = useSelector((state) => state.users);
  const userInfo = useSelector((state) => state.isLogged);

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch, userInfo]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>LogoForm</Navbar.Brand>
          </LinkContainer>
          <Nav>
            {userInfo.isLogged ? (
              <>
                <LinkContainer to="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>

                <Nav.Link onClick={logoutHandler}>Log Out</Nav.Link>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Log In</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1>Content only for users!</h1>

        {userInfo.isLogged &&
          (loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Row>
              {users.map((user) => (
                <Col key={user._id}>
                  <h2>{user.username}</h2>
                </Col>
              ))}
            </Row>
          ))}
      </Container>
    </>
  );
}
