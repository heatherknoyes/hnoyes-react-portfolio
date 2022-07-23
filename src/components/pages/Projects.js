import React from "react";
import "../../styles/Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import barcard from "../../images/barcard.png";
import weather from "../../images/WeatherDashboardGIF.gif";
import cheatsheet from "../../images/Cheetsheet.png";
import workday from "../../images/WorkDaySchedulerGIF.gif";
import quiz from "../../images/QuizGIF.gif";
import password from "../../images/passwordGenerator.png";
import food from "../../images/FoodRecall.gif";

function Projects() {
  return (
    <Container className="portfolio">
      <Row>
        <Col sm={12}>
          <a
            className="card mt-4"
            href="https://github.com/heatherknoyes/BarCard"
          >
            <Image
              className="img-fluid"
              src={barcard}
              alt="Second Project: BarCard - A Recipe Sharing Site"
            />
            <div className="custom-card-footer p-2">
              <h3 className="card-title">Second Project: BarCard</h3>
              <p className="card-text">
                Bootstrap, Javascript, Handlebars, Express, MySQL
              </p>
            </div>
          </a>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={6}>
          <a
            className="card mt-4 mx-1"
            href="https://github.com/heatherknoyes/recall-near-me"
          >
            <Image
              src={food}
              className="img-fluid"
              alt="First Project: FDA Food Recall"
            />
            <div className="custom-card-footer p-2">
              <h3 className="card-title">First Project: FDA Food Recall</h3>
              <p className="card-text">HTML/CSS, W3.CSS, Javascript</p>
            </div>
          </a>
        </Col>
        <Col lg={4} md={6}>
          <a
            className="card mt-4 mx-1"
            href="https://github.com/heatherknoyes/PasswordGenerator"
          >
            <Image
              src={password}
              className="img-fluid"
              alt="Password Generator: An app to generate a password based on user specifications"
            />
            <div className="custom-card-footer p-2">
              <h3 className="card-title">Password Generator</h3>
              <p className="card-text">Javascript</p>
            </div>
          </a>
        </Col>
        <Col lg={4} md={6}>
          <a
            className="card mt-4 mx-1"
            href="https://github.com/heatherknoyes/CodingQuestionsQuiz"
          >
            <Image
              src={quiz}
              className="img-fluid"
              alt="Small video of a Javascript quiz app"
            />
            <div className="custom-card-footer p-2">
              <h3 className="card-title">Javascript Quiz</h3>
              <p className="card-text">HTML/CSS/Javascript</p>
            </div>
          </a>
        </Col>
        <Col lg={4} md={6}>
          <a
            className="card mt-4 mx-1"
            href="https://github.com/heatherknoyes/WorkDayScheduler"
          >
            <Image
              src={workday}
              className="img-fluid"
              alt="GIF of a workday scheduling app"
            />
            <div className="custom-card-footer p-2">
              <h3 className="card-title">Workday Scheduler</h3>
              <p className="card-text">HTML/CSS/Javascript</p>
            </div>
          </a>
        </Col>
        <Col lg={4} md={6}>
          <a
            className="card mt-4 mx-1"
            href="https://github.com/heatherknoyes/CSSCheatSheet"
          >
            <Image
              src={cheatsheet}
              className="img-fluid"
              alt="First Project: CSS Cheat Sheet"
            />
            <div className="custom-card-footer p-2">
              <h3 className="card-title">CSS Cheat Sheet</h3>
              <p className="card-text">HTML/CSS</p>
            </div>
          </a>
        </Col>
        <Col lg={4} md={6}>
          <a
            className="card mt-4 mx-1"
            href="https://github.com/heatherknoyes/WeatherDashboard"
          >
            <Image
              src={weather}
              className="img-fluid"
              alt="Weather Dashboard application"
            />
            <div className="custom-card-footer p-2">
              <h3 className="card-title">Weather Dashboard</h3>
              <p className="card-text">HTML/CSS, Javascript, Bootstrap</p>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
