import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Alert, Button} from "react-bootstrap";
// import Button from "react-bootstrap/Button";


function AddedToCartMessageComponent() {
     const [show, setShow] = useState(true);

  if (show) {
  return (
    <div>
      <Alert
        show={show}
        variant="success"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>the product was added to your cart!</Alert.Heading>
        <p>
          <Button variant="success">Go Back</Button> {" "}
          <Link to="/cart" >
          
          <Button variant="danger">Go to cart</Button>
          </Link>
        </p>
      </Alert>
    </div>
  );
}


}
export default AddedToCartMessageComponent
