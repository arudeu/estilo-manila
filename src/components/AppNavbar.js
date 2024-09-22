import { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import AppCard from "./Card";
import { Notyf } from "notyf";

export default function NavigationBar() {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const notyf = new Notyf();

  function fetchProducts(e) {
    navigate("/product");
    setSearch(e);
    fetch(
      "http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/product/search-by-name",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: search }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        if (!data) {
          return notyf.error(data.message);
        }
      })
      .catch((err) => {
        return notyf.error(err);
      });
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            className="d-inline-block align-top"
            src="/Logo/estilo-manila.png"
            width={100}
            height={35}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              Products
            </Nav.Link>
            {user.id !== null ? (
              <>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => fetchProducts(e.target.value)}
                  result={products}
                />
                <Nav.Link
                  className="justify-content-end ms-auto"
                  as={NavLink}
                  to="/cart"
                  exact="true"
                >
                  <RiShoppingBagLine id="user-icon" />
                </Nav.Link>
                <NavDropdown
                  title={<FaRegUserCircle id="user-icon" />}
                  className="justify-content-end ms-auto"
                  id="basic-nav-dropdown "
                >
                  <Nav.Link as={NavLink} to="/profile" exact="true">
                    Profile
                  </Nav.Link>
                  {user.isAdmin === true ? (
                    <Nav.Link as={NavLink} to="/admin" exact="true">
                      Admin
                    </Nav.Link>
                  ) : (
                    ""
                  )}
                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>{" "}
                </NavDropdown>
              </>
            ) : (
              <NavDropdown
                title={<FaRegUserCircle id="user-icon" />}
                className="justify-content-end ms-auto"
                id="basic-nav-dropdown "
              >
                <NavDropdown.Item as={NavLink} to="/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/register">
                  Register
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
