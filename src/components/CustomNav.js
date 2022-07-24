import React from "react";
import "../styles/CustomNav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import resume from "../images/HNoyesResume.pdf";

export default function CustomNav() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg">
      <h2>Heather Noyes</h2>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/aboutme">About Me</Nav.Link>
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
