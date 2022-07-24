import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/StateNav.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function StateNav({ currentPage, handlePageChange }) {
  return (
    <Navbar className="header" collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand>Heather Noyes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-tabs">
          <Nav.Link
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "AboutMe"
                ? "nav-link nav-item active"
                : "nav-item nav-link"
            }
          >
            About Me
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio"
                ? "nav-link nav-item active"
                : "nav-item nav-link"
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact"
                ? "nav-link nav-item active"
                : "nav-item nav-link"
            }
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume"
                ? "nav-link nav-item active"
                : "nav-item nav-link"
            }
          >
            Resume
          </Nav.Link>
          {/* </ul> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
