import React from "react";
import "../styles/CustomFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomFooter() {
  return (
    <footer bgColor="light" className="footer text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        {/* <a href="https://github.com/heatherknoyes">
          <i className="fa fa-github" style="font-size: 36px"></i>
        </a>
        <a href="https://www.linkedin.com/in/heatherknoyes">
          <i className="fa fa-linkedin-square" style="font-size: 36px"></i>
        </a> */}
        Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
      </div>
    </footer>
  );
}
