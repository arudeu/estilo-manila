// components/QuantitySelector.js
import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Notyf } from "notyf";

export default function QuantitySelector({ propsValue, productId }) {
  const [quantity, setQuantity] = useState(propsValue);
  const id = productId;
  const notyf = new Notyf();

  function addToCart(e) {
    e.preventDefault();
    fetch(
      "http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/cart/update-cart-quantity",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          productId: id,
          quantity: quantity,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        notyf.success("Added To Cart Successfully!");
        console.log(data);
      });
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Form onSubmit={addToCart}>
      <InputGroup
        className="mt-2 quantity-selector"
        style={{ maxWidth: "120px" }}
      >
        <Button
          variant="outline-secondary"
          type="submit"
          onClick={handleDecrement}
        >
          -
        </Button>
        <FormControl
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
        <Button
          variant="outline-secondary"
          type="submit"
          onClick={handleIncrement}
        >
          +
        </Button>
      </InputGroup>
    </Form>
  );
}
