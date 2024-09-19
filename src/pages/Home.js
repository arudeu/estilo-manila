import AppCarousel from "../components/AppCarousel";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Row xl={12}>
        <AppCarousel />
      </Row>
    </>
  );
}
