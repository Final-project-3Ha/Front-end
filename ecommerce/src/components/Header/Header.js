import React from "react";
import {
  Badge,
  Form,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
} from "react-bootstrap";
import './header.css'
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
// import * as icons from "bootstrap-icons";

function Header() {
  const primaryColor = "#ffffff";
  const secondaryColor = "#458217";
   const accentColor = "#f7892d";

  const navbarStyle = {
    // backgroundColor: accentColor,
    backgroundColor: secondaryColor,
    height: "80px",
  };

  const brandTextStyle = {
    color: primaryColor,
  };

  const accentButtonStyle = {
    // backgroundColor: secondaryColor,
    backgroundColor: accentColor,
  };
  // const dropdownButtonStyle = {
  //   backgroundColor: "#f7892d", 
  // };

  

  // const brandTextAccentStyle = {
  //   color: accentColor,
  // };

  // const navLinkTextStyle = {
  //   color: primaryColor,
  // };
  return (
    <Navbar
      collapseOnSelect
      // expand="lg"
      // bg="dark"
      // variant="dark"
      style={navbarStyle}
    >
      <LinkContainer to="/" style={brandTextStyle}>
        <Navbar.Brand className="ms-3" href="/">
          MOUNTAIN BOONS
        </Navbar.Brand>
      </LinkContainer>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              {/* Dropdown menu */}
              <DropdownButton
                id="dropdown-item-button"
                title="Categories"
                className="custom-dropdown"
                // style={dropdownButtonStyle}
                // style= {brandTextStyle}
              >
                <Dropdown.ItemText>Olive Oil</Dropdown.ItemText>
                <Dropdown.ItemText>Olive Oil</Dropdown.ItemText>
                <Dropdown.ItemText>Olive Oil</Dropdown.ItemText>
                <Dropdown.ItemText>Olive Oil</Dropdown.ItemText>
              </DropdownButton>
              {/* search bar */}
              <Form.Control type="text" placeholder="Search in shop..."  />
              <Button variant="warning" style={accentButtonStyle}>
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders" style={{ color: primaryColor }}>
              <Nav.Link style={brandTextStyle}>
                Admin
                <Badge
                  pill
                  bg={accentColor}
                  style={{ backgroundColor: accentColor }}
                >
                  2
                </Badge>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown
              title="Hassan"
              id="collasible-nav-dropdown "
              style={{ color: primaryColor }}
            >
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
                // style={brandTextStyle}
              >
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>

            <LinkContainer to="/login" style={{ color: primaryColor }}>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register" style={{ color: primaryColor }}>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i
                  className="bi bi-cart-dash"
                  style={{ color: primaryColor }}
                ></i>

                <span className="ms-1" style={{ color: primaryColor }}>
                  Cart
                </span>
                <Badge
                  pill
                  bg={accentColor}
                  style={{ backgroundColor: accentColor }}
                >
                  2
                </Badge>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
