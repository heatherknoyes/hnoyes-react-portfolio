import React from "react";
import "../../styles/Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function Contact() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    // <section id="nav-about-me" className="about-me row">
    //   <div className="about-me-content d-flex flex-wrap">
    //     <div className="col-12 col-md-6 col-lg-4 my-5 d-flex justify-content-center"></div>
    //     <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center"></div>
    //   </div>
    // </section>
  );
}
