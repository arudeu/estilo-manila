import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { useState } from "react"

function AppForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const formContent = event.currentTarget;
    if (formContent.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
  	<div className="Container">
  	<h1 className="d-flex justify-content-md-center">Register</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 justify-content-md-center">
        <Form.Group as={Col} md="6" controlId="firstName">
          <Form.Label>First name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       </Row>

       <Row className="mb-3 justify-content-md-center">
        <Form.Group as={Col} md="6" controlId="lastName">
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       </Row>

       <Row className="mb-3 justify-content-md-center">
        <Form.Group as={Col} md="6" controlId="email">
          <Form.Label>Email:</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input proper email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3 justify-content-md-center">
        <Form.Group as={Col} md="6" controlId="mobileNo">
          <Form.Label>Mobile Number:</Form.Label>
          <Form.Control 
          	type="tel"
           	placeholder="+63 992 485 4122"
            required 
            pattern="^\+63[0-9]{10}$"
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid mobile number.
          </Form.Control.Feedback>
        </Form.Group>
       </Row>

       <Row className="mb-3 justify-content-md-center">
		  <Form.Group as={Col} md="6" controlId="password">
		    <Form.Label>Password</Form.Label>
		    <Form.Control
		      type="password"
		      id="inputPassword5"
		      placeholder="Password"
		      aria-describedby="passwordHelpBlock"
		      required
		      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$" // Regex for letters, numbers, no spaces/special characters
		    />
		    <Form.Control.Feedback type="invalid">
		      Please provide a valid password.
		    </Form.Control.Feedback>
		    <Form.Text id="passwordHelpBlock" muted>
		      Your password must be 8-20 characters long, contain letters and numbers,
		      and must not contain spaces, special characters, or emoji.
		    </Form.Text>
		  </Form.Group>
		</Row>

		<Row className="mb-3 justify-content-md-center">
		<Form.Group as={Col} md="6" controlId="verifyPassword">
		<Form.Label>Verify Password:</Form.Label>
		<Form.Control
		      type="password"
		      id="inputPassword5"
		      placeholder="Password"
		      aria-describedby="passwordHelpBlock"
		      required
		      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$" // Regex for letters, numbers, no spaces/special characters
		    />
		    <Form.Control.Feedback type="invalid">
		      Password Do Not Match.
		    </Form.Control.Feedback>
		    <Form.Text id="passwordHelpBlock" muted>
		      Your password must be the same as above.
		    </Form.Text>
		  </Form.Group>
		</Row>

		<Row className="mb-3 justify-content-md-center">
      <Form.Group as={Col} md="6" controlId="termsAndConditions">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      </Row>

      <Row className="mb-3 justify-content-md-center">
          <Col md={6}>
            <Button type="submit" className="mx-auto">Submit form</Button>
          </Col>
        </Row>
    </Form>
    <p className="d-flex justify-content-md-center">
	  Already have an account? <a href=""> Click here </a> to log in.
	</p>
    </div>

  );
}

export default AppForm;