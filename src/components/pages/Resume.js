import React from "react";
import Container from "react-bootstrap/Container";
import resume from "../../images/HNoyesResume.pdf";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <Container>
      <h3 className="mt-5">
        Download resume{" "}
        <span>
          <a href={resume} download className="resume">
            HERE
          </a>
        </span>
      </h3>

      <h4 className="mt-5">Front End Skills</h4>
      <ul>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>React</li>
        <li>GraphQL</li>
        <li>Responsive Design</li>
      </ul>
      <h4>Back End Skills</h4>
      <ul>
        <li>Kotlin</li>
        <li>Java</li>
        <li>MongoDB</li>
        <li>Node</li>
        <li>MySQL, MsSQL, Oracle</li>
      </ul>
    </Container>
  );
}
