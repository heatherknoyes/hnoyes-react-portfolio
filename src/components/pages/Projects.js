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
          <div className="card mt-2">
            <a href="https://barcard-group13.herokuapp.com/">
              <Image
                className="img-fluid rounded-top"
                src={barcard}
                alt="BarCard - A Recipe Sharing Site"
              />
            </a>
            <a
              className="custom-card-footer p-2 rounded-bottom"
              href="https://github.com/heatherknoyes/BarCard"
            >
              <h4 className="card-title">BarCard</h4>
              <p className="card-text">
                Bootstrap, Javascript, Handlebars, Express, MySQL
              </p>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={6}>
          <div className="card mt-2">
            <a href="https://bnicp.github.io/recall-near-me/">
              <Image
                src={food}
                className="img-fluid rounded-top"
                alt="FDA Food Recall"
              />
            </a>
            <a
              className="custom-card-footer p-2 rounded-bottom"
              href="https://github.com/heatherknoyes/recall-near-me"
            >
              <h4 className="card-title">FDA Food Recall</h4>
              <p className="card-text">HTML/CSS, W3.CSS, Javascript</p>
            </a>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="card mt-2">
            <a href="https://heatherknoyes.github.io/PasswordGenerator/">
              <Image
                src={password}
                className="img-fluid rounded-top"
                alt="Password Generator: An app to generate a password based on user specifications"
              />
            </a>
            <a
              className="custom-card-footer p-2 rounded-bottom"
              href="https://github.com/heatherknoyes/PasswordGenerator"
            >
              <h4 className="card-title">Password Generator</h4>
              <p className="card-text">Javascript</p>
            </a>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="card mt-2">
            <a
              className="card mt-4 mx-1"
              href="https://heatherknoyes.github.io/CodingQuestionsQuiz"
            >
              <Image
                src={quiz}
                className="img-fluid rounded-top"
                alt="Small video of a Javascript quiz app"
              />
            </a>
            <a
              className="custom-card-footer p-2 rounded-bottom"
              href="https://github.com/heatherknoyes/CodingQuestionsQuiz"
            >
              <h4 className="card-title">Javascript Quiz</h4>
              <p className="card-text">HTML/CSS/Javascript</p>
            </a>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="card mt-2">
            <a href="https://heatherknoyes.github.io/WorkDayScheduler/">
              <Image
                src={workday}
                className="img-fluid rounded-top"
                alt="GIF of a workday scheduling app"
              />
            </a>
            <a
              className="custom-card-footer p-2 rounded-bottom"
              href="https://github.com/heatherknoyes/WorkDayScheduler"
            >
              <h4 className="card-title">Workday Scheduler</h4>
              <p className="card-text">HTML/CSS/Javascript</p>
            </a>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="card mt-2">
            <a href="https://heatherknoyes.github.io/CSSCheatSheet/">
              <Image
                src={cheatsheet}
                className="img-fluid rounded-top"
                alt="First Project: CSS Cheat Sheet"
              />
            </a>
            <a
              className="custom-card-footer p-2 rounded-bottom"
              href="https://github.com/heatherknoyes/CSSCheatSheet"
            >
              <h4 className="card-title">CSS Cheat Sheet</h4>
              <p className="card-text">HTML/CSS</p>
            </a>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className="card mt-2">
            <a href="https://heatherknoyes.github.io/WeatherDashboard/">
              <Image
                src={weather}
                className="img-fluid rounded-top"
                alt="Weather Dashboard application"
              />
            </a>
            <a
              className="custom-card-footer p-2 rounded-bottom"
              href="https://github.com/heatherknoyes/WeatherDashboard"
            >
              <h4 className="card-title">Weather Dashboard</h4>
              <p className="card-text">HTML/CSS, Javascript, Bootstrap</p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
