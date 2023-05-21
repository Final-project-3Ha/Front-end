import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  // const primaryColor = "#ffffff";
  const secondaryColor = "#458217";
  const accentColor = "#E48334";
  const accentButtonStyle = {
    backgroundColor: accentColor,
  };
  const navbarStyle = {
    backgroundColor: secondaryColor,
  };
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={navbarStyle}>
      <Container>
        {/* <i className="bi bi-cart-dash"></i> */}
        <LinkContainer to="/">
          <Navbar.Brand href="/">MOUNTAIN BOONS</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ border: "2px solid White", padding: "5px" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton
                id="dropdown-basic-button"
                title="All"
                style={accentButtonStyle}
              >
                <Dropdown.Item>Olive oil</Dropdown.Item>
                <Dropdown.Item>Zaatar</Dropdown.Item>
                <Dropdown.Item>Honey</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in shop ..." />
              <Button variant="warning" style={accentButtonStyle}>
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span
                  className="position-absolute top-1 start-10 translate-middle p-2  border border-light rounded-circle"
                  style={accentButtonStyle}
                ></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title="Hassan HA" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link style={accentButtonStyle}>
                <Badge pill bg="#E48334" style={accentButtonStyle}>
                  2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">CART</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
