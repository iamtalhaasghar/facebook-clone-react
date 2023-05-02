import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

function DateOfBirthSelect() {
  return (
    <>
      <Row>
        <Form.Text className="text-muted">Date of birth</Form.Text>
        <Col>
          <Form.Select aria-label="Default select example" name="birthday_day">
            <option>Day</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            name="birthday_month"
          >
            <option>Month</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example" name="birthday_year">
            <option>Year</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
    </>
  );
}

function GenderSelect() {
  return (
    <>
      <Row className="mt-4">
        <Form.Text className="text-muted">Gender</Form.Text>

        <Col>
          <Form.Check type="radio" label="Female" id="" name="sex" value="1" />
        </Col>
        <Col>
          <Form.Check type="radio" label="Male" id="" name="sex" value="1" />
        </Col>
        {/* <Col>
          <Form.Check type="radio" label="Custom" id="" />
        </Col> */}
      </Row>
    </>
  );
}

function SignupForm() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="firstname">
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstname"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="surname">
            <Form.Control
              type="text"
              placeholder="Enter surname"
              name="lastname"
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="mobilenum">
        <Form.Control
          type="email"
          placeholder="Mobile number or email address"
          name="reg_email__"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="New Password"
          id="password_step_input"
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <DateOfBirthSelect></DateOfBirthSelect>
      <GenderSelect></GenderSelect>

      <Row className="justify-content-md-center my-3">
        <Button
          variant="primary"
          type="submit"
          className="w-25 signup-btn"
          name="websubmit"
        >
          Sign Up
        </Button>
      </Row>
    </Form>
  );
}

export default function SignupModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignupForm></SignupForm>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
