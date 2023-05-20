import React from "react";
import { Row, Container } from "react-bootstrap";
import ProductCarouselComponent from "../../components/productCarousel/ProductCarouselComponent.js";
import CategoryCardComponent from "../../components/CategoryCard/CategoryCardComponent.js";

function HomePage() {
  const categories = ["Dairy products", "Olive oil", "Zaatar", "Jam", "Torshi", "Honey"];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5 mb-5 ">
          {categories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
