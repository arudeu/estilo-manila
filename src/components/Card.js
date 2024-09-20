import Card from "react-bootstrap/Card";

export default function AppCard() {
  return (
    <Card
      className="card rounded-0"
      style={{
        backgroundImage: "url(/CarouselImages/carousel-1.jpg)",
      }}
    >
      <Card.Body className="position-absolute bottom-0 text-white">
        <Card.Title className="fw-bolder">Card Title</Card.Title>
        <Card.Text>&#x20B1;1,000.00</Card.Text>
      </Card.Body>
    </Card>
  );
}
