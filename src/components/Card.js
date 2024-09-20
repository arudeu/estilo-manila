import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function AppCard({ productProp }) {
  const { _id, name, description, price } = productProp;
  return (
    <Link to={`/product/${_id}`}>
      <Card
        className="card rounded-0"
        style={{
          backgroundImage: "url(/CarouselImages/carousel-1.jpg)",
        }}
      >
        <Card.Body className="position-absolute bottom-0 text-white">
          <Card.Title className="fw-bolder">{name}</Card.Title>
          <Card.Text>&#x20B1;{price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
