import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import QuantitySelector from "./QuantitySelector";
import Image from "react-bootstrap/Image";
import { CiTrash } from "react-icons/ci";
import { TbMoodEmpty } from "react-icons/tb";
import { Container, Row, Col } from "react-bootstrap";
import { Notyf } from "notyf";

export default function AppCart() {
  const [cart, setCart] = useState([]);
  const [prodId, setProdId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const notyf = new Notyf();

  function clearCart(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_BASE_URL}/cart/clear-cart`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        notyf.success("Cleared cart successfully!");
      });
  }

  function deleteItemFromCart(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/cart/${prodId}/remove-from-cart`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          productId: prodId,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        notyf.success("Deleted item successfully!");
      });
  }
  function fetchCart() {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/cart/get-cart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
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
          {cart.length > 0 ? (
            cart.map((crt) => {
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
                        <Form onSubmit={deleteItemFromCart}>
                          <Button
                            type="submit"
                            variant="light"
                            className="btn btn-outline-danger mx-2"
                            onClick={(e) => setProdId(crt.productId._id)}
                          >
                            <CiTrash />
                          </Button>
                        </Form>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })
          ) : (
            <Container className="my-5 text-center py-5">
              <Row>
                <h3 className="fw-bolder text-center py-5 my-5">
                  <TbMoodEmpty className="fs-1" />
                  Cart Empty
                </h3>
              </Row>
            </Container>
          )}
          {cart.length > 0 ? (
            <tfoot>
              <tr>
                <td colSpan={3}>
                  <h3 className="fw-bolder">TOTAL: &#x20B1;{totalPrice}</h3>
                </td>
                <td>
                  <Form onSubmit={clearCart}>
                    <Button
                      type="submit"
                      variant="outline-danger"
                      className="m-2"
                    >
                      Clear
                    </Button>
                  </Form>
                </td>
                <td>
                  <Button variant="outline-dark">Checkout</Button>
                </td>
              </tr>
            </tfoot>
          ) : (
            ""
          )}
        </Table>
      </Row>
    </Container>
  );
}
