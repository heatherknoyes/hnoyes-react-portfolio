import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// const styles = {
//   navbarStyle: {
//     background: "green",
//     justifyContent: "flex-end",
//   },
// };

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg lightBackground">
      <h2>Heather Noyes</h2>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse lightBackground" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#nav-about-me">
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#nav-portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#nav-contact-info">
              Contact Info
            </a>
          </li>
          <li class="nav-item">
            <a href="./assets/docs/HNoyesResume.pdf" class="nav-link" download>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
