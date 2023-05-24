import React from "react";
import {Carousel} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './ProductCarouselComponent.css'
function ProductCarouselComponent() {

  const cursorP = {
    cursor: "pointer"
  }
  return (
    <Carousel className="carousel-container ">
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{
            height: "90vh",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>First slide label</h3>
          </LinkContainer>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: "90vh",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Second slide label</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: "90vh",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Third slide label</h3>
          </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent;
