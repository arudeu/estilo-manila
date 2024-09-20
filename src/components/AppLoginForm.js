import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login attempted with:", { email, password });
    // Here you would typically send a request to your server
  };

  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-md-center py-5">
        <Col xs={12} md={6}>
          <h1 className="text-center mb-4 fw-bolder">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" className="w-20 btn-dark">
                Login
              </Button>
            </div>
          </Form>
          <p className="text-center mt-4">
            Don't have an account yet? <a href="">Click here</a> to register.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
