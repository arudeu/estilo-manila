import { Card, Col, Row, Container } from "react-bootstrap";
import AppCard from "../components/Card";
import { useEffect, useState } from "react";
export default function ProductSearch({ result }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/product/active"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });

  return (
    <Container className="my-5">
      <Row className="mt-5 mb-3">
        <Col>
          <h1 className="fw-bolder">Products</h1>
        </Col>
      </Row>
      <Row className="d-flex">
        {products.map((product) => {
          return (
            <Col className="px-0 mx-auto flex-fill" md={4} key={product._id}>
              <AppCard productProp={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
