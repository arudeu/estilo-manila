import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function ProductsView() {
  const { productId } = useParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(
      `http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/product/${productId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setImage(data.image);
      });
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="my-5">
        <Row>
          <Col className="mb-4" md={4} lg={6}>
            <Card
              className="card card-product rounded-0"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, #000), url(${image})`,
              }}
            >
              <h4 className="fw-bold text-white bottom-0 position-absolute mx-3">
                ESTILO <span className="fs-6 ">MNL</span>
              </h4>
            </Card>
          </Col>
          <Col className="product-details mb-4 p-4 position-relative">
            <h1 className="fw-bolder">{name}</h1>
            <h2>&#x20B1;{price}</h2>
            <p>{description}</p>
            <Button className="btn btn-dark position-absolute add-to-cart">
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
