import React from "react";
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../../components/PaginationComponent.js";
import ProductForListComponent from "../../components/ProductForListComponent.js";
import SortOptionsComponent from "../../components/SortOptionComponent.js";
import PriceFilterComponent from "../../components/filterQueryResultOptions/PriceFilterComponent.js";
import RatingFilterComponent from "../../components/filterQueryResultOptions/RatingFilterComponent.js";
import CategoryFilterComponent from "../../components/filterQueryResultOptions/CategoryFilterComponent.js";
import AttributesFilterComponent from "../../components/filterQueryResultOptions/AttributesFilterComponent.js";
function ProductListPage() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item className="mb-3 mt-3">
              FILTER: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filter</Button>
              <Button variant="danger">Reset filters</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <ProductForListComponent
              key={idx}
              images={[
                "/images/Carousel/nature-1.jpg",
                "/images/Carousel/nature-1.jpg",
                "/images/Carousel/nature-1.jpg",
                "/images/Carousel/nature-1.jpg",
                "/images/Carousel/nature-1.jpg",
              ]}
              idx={idx}
            />
          ))}
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductListPage;
