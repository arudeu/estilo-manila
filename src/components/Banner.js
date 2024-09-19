import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Banner({ data }) {
  const { title, content, destination, buttonLabel } = data;

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="fw-bolder">{title}</h1>
          <p>{content}</p>
          <Link className="btn bg-dark text-white" to={destination}>
            {buttonLabel}
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
