import React from "react";
import "../styles/CustomFooter.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomFooter() {
  return (
    <footer>
      <Row>
        <Col sm={{ span: 1, offset: 4 }} className="text-center">
          <a href="https://github.com/heatherknoyes">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </Col>
        <Col sm={2} className="text-center">
          &copy; {new Date().getFullYear()}
        </Col>
        <Col sm={1} className="text-center">
          <a href="https://www.linkedin.com/in/heatherknoyes">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </Col>
      </Row>
    </footer>
  );
}
