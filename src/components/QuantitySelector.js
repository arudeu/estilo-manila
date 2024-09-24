// components/QuantitySelector.js
import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function QuantitySelector({ propsValue }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <InputGroup className="quantity-selector" style={{ maxWidth: "120px" }}>
      <Button variant="outline-secondary" onClick={handleDecrement}>
        -
      </Button>
      <FormControl
        type="number"
        defaultValue={propsValue}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
      />
      <Button variant="outline-secondary" onClick={handleIncrement}>
        +
      </Button>
    </InputGroup>
  );
}
