import React from "react";
import Container from "react-bootstrap/Container";
import resume from "../../images/HNoyesResume.pdf";

export default function Contact() {
  return (
    <Container>
      <a href={resume} download>
        Resume
      </a>
    </Container>
  );
}
