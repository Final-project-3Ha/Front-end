import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function LoginPageComponent({ loginUserApiRequest }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();
    const form = event.currentTarget.elements;

    const email = form.email.value;
    const password = form.password.value;
    const doNotLogout = form.doNotLogout.checked;


    if (event.currentTarget.checkValidity() === true && email && password) {
        loginUserApiRequest(email, password, doNotLogout)
          .then((res) => console.log(res))
          .catch((er) =>
            console.log(
              er.response.data.message
                ? er.response.data.message
                : er.response.data
            )
          );
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Enter your password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                name="doNotLogout"
                type="checkbox"
                label="Don't logout"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Don't you have an account?
                <Link to={"/register"}> Register </Link>
              </Col>
            </Row>

            <Button className="mb-2" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-1"
              />
              Login
            </Button>
            <Alert show={true} variant="danger">
              Wrong credentials{" "}
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPageComponent;
