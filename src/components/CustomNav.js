import React from "react";
import "../styles/CustomNav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import resume from "../images/HNoyesResume.pdf";

export default function CustomNav() {
  return (
    <Navbar className="navbar navbar-expand-lg lightBackground">
      <Nav.Link href="/">Heather Noyes</Nav.Link>
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
    </Navbar>
  );
}
