import React from "react";
import "../styles/CustomNav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import resume from "../images/HNoyesResume.pdf";

function CustomNav() {
  return (
    <Navbar className="navbar navbar-expand-lg lightBackground">
      <Container>
        <Navbar.Brand href="/">Heather Noyes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href={resume} className="nav-link" download>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse lightBackground" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/aboutme">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nav-contact-info">
              Contact Info
            </a>
          </li>
          <li className="nav-item">
            <a
              href="./assets/docs/HNoyesResume.pdf"
              className="nav-link"
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div> */}
    </Navbar>
  );
}

export default CustomNav;
