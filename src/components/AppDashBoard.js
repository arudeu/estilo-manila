import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import Image from "react-bootstrap/Image";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Notyf } from "notyf";
import AddProductModal from "./AddProductModal";

function AppDashBoard() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);
  const [availability, setAvailability] = useState(false);
  const navigate = useNavigate();

  const notyf = new Notyf();

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  async function handleUpdate(e, id) {
    e.preventDefault();
    const updatedProduct = products.find((product) => product._id === id);
    console.log(updatedProduct);
    console.log(id);
    await fetch(
      `http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/product/${id}/update`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        notyf.success(`Product updated successfully!`);
      })
      .catch((err) => {
        console.log(err);
        notyf.error("An error has encountered!");
      });
  }

  function handleChange(id, e) {
    const { name, description, price, image, value } = e.target;
    const updatedProducts = products.map((product) =>
      product._id === id
        ? {
            ...product,
            [name]: value,
            [description]: value,
            [price]: value,
            [image]: value,
          }
        : product
    );
    console.log(updatedProducts);
    setProducts(updatedProducts);
  }

  function handleAvailabilty(id) {
    if(availability)
    fetch(
      `http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/product/${id}/activate`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(availability);
      });
  }

  function fetchProducts() {
    fetch(
      "http://ec2-3-142-164-9.us-east-2.compute.amazonaws.com/b4/product/all",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/");
    } else {
      navigate("/admin");
    }
  }, [user, navigate]);

  return (
    <>
      <Container className="my-5">
        <h1 className="d-flex justify-content-md-center pt-5 pb-3 fw-bolder">
          Admin Dashboard
        </h1>
        <div className="d-flex justify-content-md-center mb-5">
          <Button
            variant="light"
            className="btn btn-outline-dark me-3"
            onClick={() => {
              handleShow();
            }}
          >
            Add New Product
          </Button>{" "}
          <Button variant="light" className="btn btn-outline-dark">
            Show User Orders
          </Button>{" "}
        </div>
        <Form>
          <Table className="mb-5" hover>
            <thead>
              <tr>
                <th className="text-center">{}</th>
                <th className="text-center">Name</th>
                <th className="text-center">Description</th>
                <th className="text-center">Price</th>
                <th className="text-center">Image Link</th>
                <th className="text-center">Availability</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>
                      <Image
                        src={product.image}
                        width={70}
                        height={70}
                        fluid
                        roundedCircle
                        onClick={() => {
                          navigate(`/product/${product._id}`);
                        }}
                      />
                    </td>
                    <td>
                      <FormControl
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={(e) => handleChange(product._id, e)}
                      />
                    </td>
                    <td>
                      <FormControl
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={(e) => handleChange(product._id, e)}
                      />
                    </td>
                    <td width={170}>
                      <InputGroup>
                        <InputGroup.Text>&#x20B1;</InputGroup.Text>
                        <FormControl
                          name="price"
                          type="number"
                          value={product.price}
                          onChange={(e) => handleChange(product._id, e)}
                        />
                      </InputGroup>
                    </td>
                    <td>
                      <FormControl
                        name="image"
                        value={product.image}
                        onChange={(e) => handleChange(product._id, e)}
                      />
                    </td>
                    <td className="text-center">
                      <Form onChange={() => handleAvailabilty(product._id)}>
                        <Form.Check
                          type="switch"
                          defaultChecked={product.isActive}
                          value={availability}
                          onChange={(e) => setAvailability(e.target.value)}
                        />
                      </Form>
                    </td>
                    <td>
                      <div className="d-flex buttons">
                        <Button
                          variant="light"
                          className="btn btn-outline-dark mx-2"
                          onClick={(e) => handleUpdate(e, product._id)}
                        >
                          <FaCheck />
                        </Button>{" "}
                        <Button
                          variant="light"
                          className="btn btn-outline-danger mx-2"
                        >
                          <CiTrash />
                        </Button>{" "}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Form>
      </Container>
      <AddProductModal
        show={showModal}
        onHide={handleClose}
        refresh={fetchProducts}
      />
    </>
  );
}

export default AppDashBoard;
