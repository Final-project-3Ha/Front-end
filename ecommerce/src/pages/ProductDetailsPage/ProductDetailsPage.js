import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent";

function ProductDetailsPage() {
  return (
    <Container>
      <AddedToCartMessageComponent/>
      <Row className="mt-5">
        <Col md={4}>Images</Col>
        <Col md={8}>
          <Row>
            <Col md={8}>product name, price, description, rating</Col>
            <Col md={4}>product status, quantity</Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
            </Col>
          </Row>
          <hr />
          send review form
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailsPage;
