import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import QuantitySelector from "./QuantitySelector";
import Image from "react-bootstrap/Image";
import { CiTrash } from "react-icons/ci";
import { Container, Row, Col } from "react-bootstrap";

// http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/cart/get-cart

export default function AppCart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function fetchCart() {
    fetch(
      "http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/cart/get-cart",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCart(data.cartItems);
        setTotalPrice(data.totalPrice);
      });
  }

  useEffect(() => {
    fetchCart();
  });
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5 fw-bolder">Shopping Cart</h1>
        </Col>
      </Row>
      <Row>
        <Table className="container mt-5">
          {cart.map((crt) => {
            return (
              <>
                <thead>
                  <tr>
                    <th colSpan={2}>{crt.productId.name}</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src={crt.productId.image}
                        width={130}
                        height={130}
                        roundedCircle
                      />
                    </td>
                    <td>
                      <p className="cart-description">
                        {crt.productId.description}
                      </p>
                      <div className="mt-3">
                        <span>Quantity:</span>
                        <QuantitySelector
                          propsValue={crt.quantity}
                          productId={crt.productId._id}
                        />
                      </div>
                    </td>
                    <td id="price">&#x20B1;{crt.productId.price}</td>
                    <td id="subtotal">&#x20B1;{crt.subtotal}</td>
                    <td>
                      <Button
                        variant="light"
                        className="btn btn-outline-danger mx-2"
                      >
                        <CiTrash />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}

          <tfoot>
            <tr>
              <td colSpan={3}>
                <h3 className="fw-bolder">TOTAL: &#x20B1;{totalPrice}</h3>
              </td>
              <td>
                <Button variant="outline-danger" className="m-2">
                  Clear
                </Button>
              </td>
              <td>
                <Button variant="outline-dark">Checkout</Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Row>
    </Container>
  );
}
