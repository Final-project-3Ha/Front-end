import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import'./CategoryCard.css'
function CategoryCardComponent({ category, idx }) {
  //  const primaryColor = "#ffffff";
  //  const secondaryColor = "#458217";
  // const accentColor = "#E48334";

  // const accentButtonStyle = {
  //   backgroundColor: accentColor,
  // };
  const images = [
    "/images/Carousel/nature-1.jpg",
    "/images/Carousel/nature-1.jpg",
    "/images/Carousel/nature-1.jpg",
    "/images/Carousel/nature-1.jpg",
    "/images/Carousel/nature-1.jpg",
    "/images/Carousel/nature-1.jpg",
  ];
  return (
    <Card>
      <Card.Img crossorigin="anonymous" variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <LinkContainer to="product-list" style={accentButtonStyle}>
          <Button variant="primary" bg="#E48334" style={accentButtonStyle}> */}
        <LinkContainer to="product-list" > 
          <Button variant="primary" className=" btn btn-category btn-block">
            Go to the Category
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default CategoryCardComponent;
