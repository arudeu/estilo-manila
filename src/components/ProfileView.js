import { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import {
  Card,
  CardText,
  CardFooter,
  CardTitle,
  CardBody,
} from "react-bootstrap";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

export default function ProfileView() {
  const { user } = useContext(UserContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(
      "http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/users/details",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setFullName(`${data.firstName} ${data.lastName}`);
        setEmail(data.email);
        setMobile(data.mobileNo);
        setImage(data.image);
        console.log(data);
      });
  });

  return (
    <Container>
      <Row>
        <Col>
          <Card className="profile-card">
            {user !== null ? (
              <>
                <Image
                  src={image}
                  fluid
                  roundedCircle
                  width={250}
                  height={250}
                ></Image>
              </>
            ) : (
              <Navigate to="/" />
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
