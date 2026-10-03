import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import PreviewProducts from "../components/PreviewProducts";

export default function Products() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/product/active`)
      .then((res) => res.json())
      .then((data) => {
        // The API returns an object like { message: "..." } (not an array)
        // when there are no products or something went wrong.
        if (!Array.isArray(data) || data.length === 0) {
          setFeatured([]);
          return;
        }

        // Pick up to 3 different random products (Fisher-Yates shuffle)
        const shuffled = [...data];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setFeatured(shuffled.slice(0, 3));
      })
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <Container className="my-5">
      <Row className="mb-2">
        <h1 className="fw-bolder">Featured Products</h1>
      </Row>
      <Row>
        {featured.length > 0 ? (
          featured.map((product) => (
            <Col key={product._id}>
              <PreviewProducts data={product} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No products available yet. Please check back soon.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}
